import * as Settings from './constants/WorldSettings';
import * as Sensors from './constants/sensors';
import { multiplyMatrices, roundWithPrecision, rotatePoint } from './utils';

// FIXME: Add some constants to constructor (e.g. max speed, sensor interval)
const positionPrecision = 9;

export function translateNeuralToSpeedCoeff(neuralOutput, neuralAbsoluteMin, neuralAbsoluteMax) {
  const mapToMin = -1;
  const mapToMax = 1;
  const spread = mapToMax - mapToMin;
  const neuralSpread = neuralAbsoluteMax - neuralAbsoluteMin;

  return neuralOutput.map(val => {
    return mapToMin + (val - neuralAbsoluteMin) / neuralSpread * spread;
  });
}

export default class Robot {
  get speed() {
    // Signifies instant left/right wheel speed
    return {
      left: this.leftServoCoeff * ((this.leftWheel - this.servoStop) / this.servoSpeedSpread) * this.maxSpeed,
      right: this.rightServoCoeff * ((this.rightWheel - this.servoStop) / this.servoSpeedSpread) * this.maxSpeed
    }
  }

  get stopped() {
    return this.leftWheel === this.rightWheel && this.rightWheel === this.servoStop;
  }

  constructor(params) {
    for (let key in params) {
      if (this[key] === undefined){
        this[key] = params[key];
      }
    }

    this.setSpeedCoeff(params.startSpeed[0], params.startSpeed[1]);
  }

  getServoSpeedsForSensorInput(sensors) {
    const { absoluteMin, absoluteMax, neuralNet } = this.behavior;
    const neuralOutput = neuralNet.activate(sensors);

    return translateNeuralToSpeedCoeff(neuralOutput, absoluteMin, absoluteMax)
  }

  setWheelPulses(leftSpeed, rightSpeed) {
    this.leftWheel = this.servoStop + leftSpeed * this.leftServoCoeff;
    this.rightWheel = this.servoStop + rightSpeed * this.rightServoCoeff;
  }

  /**
   * Set speed of both wheels where 1 is the maximum speed and -1 is the maximum
   * in reverse.
   *
   * @param left Speed for the left wheel <-1, 1>.
   * @param right Speed for the right wheel <-1, 1>.
   */
  setSpeedCoeff(left, right) {
    this.leftWheel = this.servoStop + (this.servoSpeedSpread * left) * this.leftServoCoeff;
    this.rightWheel = this.servoStop + (this.servoSpeedSpread * right) * this.rightServoCoeff;
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
    if (sensors.every(s => !s)) {
      this.stop();
    } else {
      const speeds = this.getServoSpeedsForSensorInput(sensors);
      this.setSpeedCoeff(speeds[0], speeds[1]);
    }
  }

  tick(world, sensorIntervalInS) {
    this.updateState(world);
    this.move(sensorIntervalInS || this.sensorInterval);
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

  runUntilStop(world, fitnessTicker) {
    let fitnessValue = 0;

    this.tick(world);
    fitnessValue += fitnessTicker();
    let iteration = 0;
    const maxIterations = 10000;
    while (!this.stopped && iteration < maxIterations) {
      this.tick(world);
      fitnessValue += fitnessTicker();
      iteration++;
    }

    return fitnessValue;
  }

  stop() {
    this.setSpeedCoeff(0, 0);
  }

}