import { createNeat } from './NeuralController';
import { animate } from './animateRobot';

export function test(robot, world, network, speedCoeff) {
  robot.behavior.neuralNet = network;
  window.animateRobot = animate.bind(this, robot, world, speedCoeff);
}

export function train(robot, world, fitness) {
  console.log('--- Evolution started! ---');
  const neuralNet = createNeat(fitnessEvaluator.bind(this, robot, world, fitness));

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
}

function fitnessEvaluator(robot, world, fitness, genome) {
  robot.behavior.neuralNet = genome;
  return robot.runUntilStop(world, fitness.bind(this, robot, world));
}