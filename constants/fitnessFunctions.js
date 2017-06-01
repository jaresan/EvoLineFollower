export const speedAndMiddleOnLine = (robot, world) => {
  const { left, right } = robot.speed;
  const val = Math.abs(left + right);
  return robot.readSensors(world)[2] ? val : 0;
};

export const middleOnLine = (robot, world) => {
  const { left, right } = robot.speed;
  const speed = Math.abs(left + right);
  const sensors = robot.readSensors(world);
  let val = sensors[2] ? 1 : 0;
  let penalty = sensors[1] ? 1 : 0;
  penalty += sensors[3] ? 1 : 0;
  penalty += (left < 0 || right < 0) ? 3 : 0;
  return speed > 0.005 ? val - penalty : -penalty;
};

export const speed = (robot, world) => {
  const { left, right } = robot.speed;
  var result = robot.behavior.neuralNet.activate([0,1,0,0,1]);
  var penalty = Math.abs(1 - result[0]) + Math.abs(1 - result[1]);
  return -penalty;
};