const { createNeat } = require('./evolution/neat');
const { animate } = require('./simulator/animateRobot');
const Robot = require('./simulator/robot');
const Networks = require('../networkResults/networks');

/** Create a robot with a given network as a controller and animate.
 *
 * @param robotParams Parameters of the robot.
 * @param world Representation of the world.
 * @param network Network to be used as a controller for the robot.
 * @param speedCoeff Speed of the animation.
 */
function test(robotParams, world, network, speedCoeff) {
  robotParams.behavior.neuralNet = network;
  window.animateRobot = animate.bind(this, robotParams, world, speedCoeff);
}

/** Train the network controlling the robot using NEAT algorithm.
 *
 * @param robotParams Parameters of the robot simulation.
 * @param world Environment representation.
 * @param evolutionParams Parameters of the evolution.
 * @param logger
 * @returns {*} best network find during evolution
 */
function train(robotParams, world, evolutionParams, logger) {
  console.log('--- Evolution started! ---');

  // create an instance of NEAT
  const neuralNet = createNeat(
      robotParams.inputSize,
      robotParams.outputSize,
      evolutionParams.hiddenNeurons,
      fitnessEvaluator.bind(this, robotParams, world, evolutionParams.fitness),
      evolutionParams.mutationRate,
      evolutionParams.populationSize,
      evolutionParams.elite
      );

  // run NEAT
  let generation = 0;
  let currentBestNetwork;

  while (generation++ < evolutionParams.maxGenerations) {
    neuralNet.evolve();
    currentBestNetwork = neuralNet.getFittest();
    if (typeof logger === 'function') {
      logger(currentBestNetwork);
    }
    console.log(JSON.stringify(currentBestNetwork.toJSON(), undefined, 2));
    console.log(generation + ": " + currentBestNetwork.score);
  }
  return currentBestNetwork;
}

/**
 * Runs the robot with the given network as controller and computes its fitness.
 * @param robotParams Parameters of the robot.
 * @param world Representation of the world.
 * @param fitnessFunction Fitness function used to evaluate the robot.
 * @param network The network to be used as a controller for the robot.
 * @returns {*} The fitness of the network.
 */
function fitnessEvaluator(robotParams, world, fitnessFunction, network) {
  const robot = new Robot(robotParams);
  robot.behavior.neuralNet = network;
  return robot.runUntilStop(world, fitnessFunction.bind(this, robot, world));
}

module.exports = { test, train };