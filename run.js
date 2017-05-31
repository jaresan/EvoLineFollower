import Robot from './Robot';
import World from './World';

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