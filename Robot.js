import * as Settings from './constants/WorldSettings';
import * as Sensors from './constants/sensors';
import { multiplyMatrices, roundWithPrecision } from './utils';

// FIXME: Add some constants to constructor (e.g. max speed, sensor interval)
const servoStop = 1500;
const servoSpeedSpread = 200;
const leftServoCoeff = 1;
const rightServoCoeff = -1;
const maxSpeedMPerS = 0.01;
const sensorIntervalInS = 0.005;  // Interval between each sensor reading in milliseconds
const positionPrecision = 5;

export function translateNeuralToSpeedCoeff(neuralOutput, neuralAbsoluteMin, neuralAbsoluteMax) {
  const mapToMin = -1;
  const mapToMax = 1;
  const spread = mapToMax - mapToMin;
  const neuralSpread = neuralAbsoluteMax - neuralAbsoluteMin;

  return neuralOutput.map(val => {
    const coeff = mapToMin + (val - neuralAbsoluteMin) / neuralSpread * spread;
    return coeff * servoSpeedSpread;
  });
}

const initialState = {
  sensorData: [],
  rotation: 0,
  wheelBase: 0.01,
  sensorDistance: 0.01,
  leftWheel: servoStop,
  rightWheel: servoStop,
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

  get position() {
    return this._position;
  }

  get stopped() {
    return this.leftWheel === this.rightWheel === servoStop;
  }

  constructor({x = 0, y = 0, rotation, wheelBase, sensorDistance, behaviour} = initialState) {
    for (let key in initialState) {
      this[key] = initialState[key];
    }
    this.wheelBase = wheelBase;
    this.sensorDistance = sensorDistance;
    this._position = { x, y };
    this.rotation = rotation;
    this.behaviour = behaviour;
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

  readSensors(world) {
    // FIXME: Add checking for black line
    // Check for rotation, position, sensor distance from wheel base etc
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

  tick(world, sensorIntervalInS = sensorIntervalInS) {
    this.updateState(world);
    this.move(sensorIntervalInS);
  }

  move(moveDuration) {
    // FIXME: Implement
    // TODO: Compute sin/cos etc..
    // TODO: Add sensor weights from the neural network

    // FIXME: Need to know the sensor interval and max speed to compute velocity / position change
    // FIXME: Map left/right MPerS speeds to pixel speeds

    const {x, y} = this.position;
    const {leftSpeed, rightSpeed} = this.speed;
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

    this._position = {
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