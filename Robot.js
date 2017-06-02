const { multiplyMatrices, roundWithPrecision, rotatePoint } = require('./utils');

// FIXME: Add some constants to constructor (e.g. max speed, sensor interval)
const positionPrecision = 9;

function translateNeuralToSpeedCoeff(neuralOutput, neuralAbsoluteMin, neuralAbsoluteMax) {
  const mapToMin = -1;
  const mapToMax = 1;
  const spread = mapToMax - mapToMin;
  const neuralSpread = neuralAbsoluteMax - neuralAbsoluteMin;
  let result;

  return neuralOutput.map(val => {
    result = mapToMin + (val - neuralAbsoluteMin) / neuralSpread * spread;
    result = Math.max(result, mapToMin);
    result = Math.min(result, mapToMax);
    return result;
  });
}

class Robot {
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

    this.sensorTimeout = this.noSensorStopTimeout;
    this.setSpeedCoeff(params.startSpeedCoeff[0], params.startSpeedCoeff[1]);
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
    this.sensorTimeout -= this.sensorInterval;
    if (this.sensorTimeout < 0 && sensors.every(s => !s)) {
      this.stop();
    } else {
      this.sensorTimeout = this.noSensorStopTimeout;
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
    console.log(this.speed);

    let newX, newY;
    if (Math.abs(leftSpeed - rightSpeed) >= 1.0e-6) {
      const r = this.wheelBase * (leftDelta + rightDelta) / (2 * (rightDelta - leftDelta));
      const wd = (rightDelta - leftDelta) / this.wheelBase;
      // convert to radians (may wanna have a function for that)
      newX = x + r * Math.sin( Math.PI/180 * (wd + this.rotation)) - r * Math.sin(Math.PI/180 * this.rotation);
      newY = y - r * Math.cos( Math.PI/180 * (wd + this.rotation)) + r * Math.cos(Math.PI/180 * this.rotation);

      this.rotation = this.rotation + wd;
    } else {
      newX = x + (leftDelta * Math.cos(Math.PI/180 * this.rotation));
      newY = y + (rightDelta * Math.sin(Math.PI/180 * this.rotation));
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
    const maxIterations = 1000000;
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

module.exports = Robot;