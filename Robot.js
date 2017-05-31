import * as Settings from './constants/WorldSettings';
import * as Sensors from './constants/sensors';
import { multiplyMatrices, roundWithPrecision, rotatePoint } from './utils';

// FIXME: Add some constants to constructor (e.g. max speed, sensor interval)
const servoStop = 1500;
const servoSpeedSpread = 200;
const leftServoCoeff = 1;
const rightServoCoeff = -1;
const maxSpeedMPerS = 0.01;
const sensorInterval = 0.005;  // Interval between each sensor reading in milliseconds
const positionPrecision = 5;

export function translateNeuralToSpeedCoeff(neuralOutput, neuralAbsoluteMin, neuralAbsoluteMax) {
  const mapToMin = -1;
  const mapToMax = 1;
  const spread = mapToMax - mapToMin;
  const neuralSpread = neuralAbsoluteMax - neuralAbsoluteMin;

  return neuralOutput.map(val => {
    return mapToMin + (val - neuralAbsoluteMin) / neuralSpread * spread;
  });
}

const initialState = {
  sensorData: [],
  rotation: 0,
  wheelBase: 0.1,
  leftWheel: servoStop,
  rightWheel: servoStop,
  sensorDeltas: [ // Sensor position in relation to the center of the wheel axel -> [deltaX, deltaY] in meters
    [0.1, 0.05],
    [0.1, 0.02],
    [0.1, 0],
    [0.1, -0.02],
    [0.1, -0.05]
  ],
  sensorRadius: 0.01, // Half of the square side of the sensor (to know how much the sensor can see)
  behaviour: {
    neuralNet: {
      activate: () => [1,1]
    },
    absoluteMin: -1,
    absoluteMax: 1
  }  // Behavior specified as neural net + it's maximum/minimum output
  // (last layer should have only two neurons, corresponding to the two servos)
};

export default class Robot {
  get speed() {
    // Signifies instant left/right wheel speed
    return {
      left: ((this.leftWheel - servoStop) / servoSpeedSpread) * maxSpeedMPerS,
      right: ((this.rightWheel - servoStop) / servoSpeedSpread) * maxSpeedMPerS
    }
  }

  get stopped() {
    return this.leftWheel === this.rightWheel === servoStop;
  }

  constructor({x = 0, y = 0, rotation, wheelBase, sensorDeltas, behaviour} = initialState) {
    this.wheelBase = wheelBase;
    this.sensorDeltas = sensorDeltas;
    this.position = { x, y };
    this.rotation = rotation;
    this.behaviour = behaviour;

    for (let key in initialState) {
      if (this[key] === undefined){
        this[key] = initialState[key];
      }
    }
  }

  getServoSpeedsForSensorInput(sensors) {
    const { absoluteMin, absoluteMax, neuralNet } = this.behaviour;
    const neuralOutput = neuralNet.activate(sensors);

    return translateNeuralToSpeedCoeff(neuralOutput, absoluteMin, absoluteMax)
  }

  setWheelPulses(leftSpeed, rightSpeed) {
    this.leftWheel = servoStop + leftSpeed * leftServoCoeff;
    this.rightWheel = servoStop + rightSpeed * rightServoCoeff;
  }

  /**
   * Set speed of both wheels where 1 is the maximum speed and -1 is the maximum
   * in reverse.
   *
   * @param left Speed for the left wheel <-1, 1>.
   * @param right Speed for the right wheel <-1, 1>.
   */
  setSpeedCoeff(left, right) {
    this.leftWheel = servoStop + (servoSpeedSpread * left) * leftServoCoeff;
    this.rightWheel = servoStop + (servoSpeedSpread * right) * leftServoCoeff;
  }

  getSensorPosition(deltaX, deltaY) {
    const {x, y} = this.position;
    return rotatePoint(x, y, x + deltaX, y + deltaY, this.rotation);
  }

  readSensors(world) {
    return this.sensorDeltas.map(([deltaX, deltaY]) => {
      const [x, y] = this.getSensorPosition(deltaX, deltaY);
      return world.canSeeLine(x, y, this.sensorRadius);
    });
  }

  updateState(world) {
    const sensors = this.readSensors(world);
    if (sensors.every(s => s === Sensors.blank)) {
      stop();
    } else {
      const speeds = this.getServoSpeedsForSensorInput(sensors);
      this.setSpeedCoeff(speeds[0], speeds[1]);
    }
  }

  tick(world, sensorIntervalInS = sensorInterval) {
    this.updateState(world);
    this.move(sensorIntervalInS);
  }

  move(moveDuration) {
    const {x, y} = this.position;
    const {left: leftSpeed, right: rightSpeed} = this.speed;
    const leftDelta = moveDuration * leftSpeed;
    const rightDelta = moveDuration * rightSpeed;

    let newX, newY;
    if (Math.abs(leftSpeed - rightSpeed) >= 1.0e-6) {
      const r = this.wheelBase * (leftDelta + rightDelta) / (2 * (rightDelta - leftDelta));
      const wd = (rightDelta - leftDelta) / this.wheelBase;
      newX = x + r * Math.sin(wd + this.rotation) - r * Math.sin(this.rotation);
      newY = y - r * Math.cos(wd + this.rotation) + r * Math.cos(this.rotation);

      this.rotation = this.rotation + wd;
    } else {
      newX = x + (leftDelta * Math.cos(this.rotation));
      newY = y + (rightDelta * Math.sin(this.rotation));
    }

    this.position = {
      x: roundWithPrecision(newX, positionPrecision),
      y: roundWithPrecision(newY, positionPrecision)
    };

    return [newX, newY];
  }

  stop() {
    this.setSpeedCoeff(0, 0);
  }

  getFitnessValue(fitnessFunction) {
    return fitnessFunction(this);
  }

}