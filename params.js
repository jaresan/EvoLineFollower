const Fitness = require('./constants/fitnessFunctions');

const robotParams = {
    position: {
        x: 0.50,
        y: 0.875,
    },
    noSensorStopTimeout: 200, // When no sensors can see anything, stop after this time
    sensorInterval: 0.02,
    maxSpeed: 0.2, // proc byla puvodne mensi nez startSpeed? (0.05 < 0.3)
    startSpeedCoeff: [0.3, 0.3],
    servoStop: 1500,
    servoSpeedSpread: 200,
    leftServoCoeff: 1,
    rightServoCoeff: -1,
    rotation: 180, // trying other way
    wheelBase: 0.105,
    sensorDeltas: [ // Sensor position in relation to the center of the wheel axel -> [deltaX, deltaY] in meters
        [0.04, 0.05],
        [0.04, 0.015],
        [0.04, 0],
        [0.04, -0.015],
        [0.04, -0.05]
    ],
    sensorRadius: 0.0015, // Half of the square side of the sensor (to know how much the sensor can see)
    behavior: {
        neuralNet: {
            activate: () => [-100, -100]
        },
        absoluteMin: -1,
        absoluteMax: 1
    }
};

const evolutionParams = {
    mutationRate: 0.8,
    populationSize: 100,
    hiddenNeurons: 3,
    maxIterations: 200,
    fitness: Fitness.noReverse
};

module.exports = {robotParams, evolutionParams};