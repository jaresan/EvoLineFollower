export const speedAndMiddleOnLine = (robot, world) => {
  const { left, right } = robot.speed;
  const val = Math.abs(left + right);
  return robot.readSensors(world)[2] ? val : 0;
};