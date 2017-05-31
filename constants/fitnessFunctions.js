export const speedAndMiddleOnLine = (robot, world) => {
  const { left, right } = robot.speed;
  const diff = Math.abs(left - right);
  const val = Math.max(left, right) - diff;
  return robot.readSensors(world)[2] ? val : 0;
};