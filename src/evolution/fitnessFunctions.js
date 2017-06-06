const speedAndMiddleOnLine = (robot, world) => {
  const { left, right } = robot.speed;
  const val = Math.abs(left + right);
  return robot.readSensors(world)[2] ? val : 0;
};

const middleOnLine = (robot, world) => {
  const { left, right } = robot.speed;
  const speed = Math.abs(left + right);
  const sensors = robot.readSensors(world);
  let val = sensors[2] ? 1 : 0;
  let penalty = sensors[1] ? 1 : 0;
  penalty += sensors[3] ? 1 : 0;
  penalty += (left < 0 || right < 0) ? 3 : 0;
  return speed > 0.005 ? val - penalty : -penalty;
};

const speed = (robot, world) => {
  const { left, right } = robot.speed;
  var result = robot.behavior.neuralNet.activate([0,1,0,0,1]);
  var penalty = Math.abs(1 - result[0]) + Math.abs(1 - result[1]);
  return -penalty;
};

// experimenting
// The best one goes back and forth ....
const distance = (robot, world) => {
    const { left, right } = robot.speed;
    const speed = left + right;

    const sensors = robot.readSensors(world);
    let penalty = sensors[2] ? 0 : 2;
    penalty += speed < 0.05 ? 1 : 0;
    let reward = sensors[2] && speed > 0.05 ? 10 * speed : 0;
    let score = -penalty + reward;
    return score;
};

// experimenting
// The best one goes back and forth ....
const noReverse = (robot, world) => {
  const { left, right } = robot.speed;
  const speed = left + right;

  const sensors = robot.readSensors(world);
  let penalty = sensors[2] ? 0 : 2;
  penalty += speed < robot.maxSpeed / 10 ? 1 : 0;
  penalty += speed < 0 ? 100 : 0;
  let reward = sensors[2] && speed > robot.maxSpeed / 10 ? 10 * speed : 0;
  let score = -penalty + reward;
  return score;
};

const penalizeLarge = (robot, world) => {
    const { left, right } = robot.speed;
    const speed = left + right;

    const sensors = robot.readSensors(world);
    let penalty = sensors[2] ? 0 : 2;
    penalty += speed < robot.maxSpeed / 10 ? 1 : 0;
    penalty += speed < 0 ? 100 : 0;
    let reward = sensors[2] && speed > robot.maxSpeed / 10 ? 10 * speed : 0;

    let net = robot.behavior.neuralNet;
    let largeNetPenalty = (net.nodes.length - net.input - net.output) / 5;

    let score = -penalty -largeNetPenalty + reward;
    return score;
};

// experimenting
// The best one goes back and forth ....
const clearFitness = (robot, world) => {
    const { left, right } = robot.speed;
    const speed = left + right;

    return speed;
};


module.exports = { speed, speedAndMiddleOnLine, middleOnLine, distance, noReverse, penalizeLarge, clearFitness };