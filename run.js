const { createNeat } = require('./NeuralController');
const { animate } = require('./animateRobot');
const Robot = require('./Robot');
const Networks = require('./networkResults/networks');
const { parseNetwork } = require('./NeuralController');

function test(robotParams, world, network, speedCoeff) {
  robotParams.behavior.neuralNet = network;
  window.animateRobot = animate.bind(this, robotParams, world, speedCoeff);
}

function train(robotParams, world, evolutionParams, logger) {
  console.log('--- Evolution started! ---');
  const neuralNet = createNeat(
      fitnessEvaluator.bind(this, robotParams, world, evolutionParams.fitness),
      evolutionParams.mutationRate,
      evolutionParams.populationSize,
      evolutionParams.hiddenNeurons);
  let iteration = 0;
  const maxIterations = evolutionParams.maxIterations;
  let network;
  const scores = [];
  const scoreMap = {};
  while (iteration++ < maxIterations) {
    neuralNet.evolve();

    network = neuralNet.getFittest();
    if (typeof logger === 'function') {
      logger(network);
    }

    scores.push(network.score);
    console.log(JSON.stringify(network.toJSON(), undefined, 2));
    console.log(iteration + ": " + network.score);
    scoreMap[network.score] = network;
  }

  console.log(JSON.stringify(network.toJSON(), undefined, 2));
  console.log('Best Score: ', network.score);

  return network;
}

function fitnessEvaluator(robotParams, world, fitness, genome) {
  const robot = new Robot(robotParams);
  robot.behavior.neuralNet = parseNetwork(Networks.test);
  return robot.runUntilStop(world, fitness.bind(this, robot, world));
}

module.exports = { test, train };