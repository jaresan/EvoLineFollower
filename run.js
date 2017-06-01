import { createNeat } from './NeuralController';
import { animate } from './animateRobot';
import Robot from './Robot';

export function test(robotParams, world, network, speedCoeff) {
  robotParams.behavior.neuralNet = network;
  window.animateRobot = animate.bind(this, robotParams, world, speedCoeff);
}

export function train(robotParams, world, fitness) {
  console.log('--- Evolution started! ---');
  const neuralNet = createNeat(fitnessEvaluator.bind(this, robotParams, world, fitness));

  let iteration = 0;
  const maxIterations = 100;
  let network;
  const scores = [];
  const scoreMap = {};
  while (iteration++ < maxIterations) {
    neuralNet.evolve();

    network = neuralNet.getFittest();
    scores.push(network.score);
    console.log(scores);
    scoreMap[network.score] = network;
  }

  console.log(JSON.stringify(network.toJSON(), undefined, 2));
  console.log('Best Score: ', network.score);

  return network;
}

function fitnessEvaluator(robotParams, world, fitness, genome) {
  const robot = new Robot(robotParams);
  robot.behavior.neuralNet = genome;
  return robot.runUntilStop(world, fitness.bind(this, robot, world));
}