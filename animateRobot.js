import * as Settings from './constants/WorldSettings';

function drawRobot(ctx, robot, world) {
  const {x, y} = world.convertWorldCoordsToFieldCoords(
    robot.position.x - robot.wheelBase / 2,
    robot.position.y - robot.wheelBase / 2
  );

  const sensors = robot.sensorDeltas.map(([deltaX, deltaY]) => {
    const [x, y] = robot.getSensorPosition(deltaX, deltaY);
    return world.convertWorldCoordsToFieldCoords(x, y);
  });

  ctx.fillStyle = "rgba(150, 0, 0, 100)";
  ctx.rect(x, y, Math.abs(x - sensors[2].x), robot.wheelBase * Settings.PIXELS_PER_M);

  sensors.forEach(coords => {
    ctx.fillStyle = "rgba(10, 50, 200, 100)";
    ctx.rect(coords.x, coords.y, 4, 4);
  });

  ctx.fill();
}

export function animate(robot, world) {
  const canvas = world.drawWorld();
  document.body.append(canvas);
  const ctx = canvas.getContext('2d');
  setInterval(() => {
    // world.drawWorld(1, ctx);
    robot.tick(world, 0.25);
    drawRobot(ctx, robot, world);
  },5);
}