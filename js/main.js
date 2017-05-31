import Robot from '../Robot';
import World from '../World';

window.Robot = Robot;
window.a = new Robot();
console.log(a);
a.setSpeedCoeff(1, 1);

window.moveRobot = (duration = 1, left, right) => {
  if (left !== undefined && right !== undefined) {
    a.setSpeedCoeff(left, right);
  }
  a.move(duration);
  console.log(`Position: ${JSON.stringify(a.position)}, rotation: ${a.rotation}`);
};