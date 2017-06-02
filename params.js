const Fitness = require('./constants/fitnessFunctions');

const robotParams = {
    position: {
        x: 0.50,
        y: 0.875,
    },
    sensorInterval: 0.02,
    maxSpeed: 0.3, // proc byla puvodne mensi nez startSpeed? (0.05 < 0.3)
    startSpeed: [0.3, 0.3],
    servoStop: 1500,
    servoSpeedSpread: 200,
    leftServoCoeff: 1,
    rightServoCoeff: -1,
    rotation: 0, // trying other way
    wheelBase: 0.1,
    sensorDeltas: [ // Sensor position in relation to the center of the wheel axel -> [deltaX, deltaY] in meters
        [0.07, 0.05],
        [0.07, 0.02],
        [0.07, 0],
        [0.07, -0.02],
        [0.07, -0.05]
    ],
    sensorRadius: 0.01, // Half of the square side of the sensor (to know how much the sensor can see)
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
    fitness: Fitness.distance
};

module.exports = {robotParams, evolutionParams};