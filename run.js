import Robot from './Robot';
import World from './World';
import { createNeat } from './NeuralController';
import { speedAndMiddleOnLine } from './constants/fitnessFunctions';

function run(neuralNet, fitnessFunction, map) {
  const robot = new Robot({
    x: 0,
    y: 0,
    rotation: 0,
    wheelBaseInMM: 100,
    behavior: neuralNet
  });

  const world = new World(map);

  while (!robot.stopped) {
    robot.updateState(world);
    robot.move();
  }

}

export function run2(world) {
  const neuralNet = createNeat(fitnessEvaluator.bind(this, world));

  let iteration = 0;
  const maxIterations = 100;
  let network;
  while (iteration++ < maxIterations) {
    neuralNet.evolve();

    network = neuralNet.getFittest();
    console.log(network.score, JSON.stringify(network.toJSON(), undefined, 2));
  }

  console.log(JSON.stringify(network.toJSON(), undefined, 2));
  console.log('Score: ', network.score);
}

function fitnessEvaluator(world, genome) {
  const robot = new Robot({
    x: 0.35,
    y: 0.88,
    rotation: 0,
    wheelBase: 0.1,
    behavior: {
      neuralNet: genome,
      absoluteMin: 0,
      absoluteMax: 1
    }
  });

  return robot.runUntilStop(world, speedAndMiddleOnLine.bind(this, robot, world));
}