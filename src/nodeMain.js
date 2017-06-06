const World = require('./simulator/world');
const { train } = require('./run');
const evolutionParams = require('./evolution/evolutionParams');
const robotParams = require('./simulator/robotParams');
const sharp = require('sharp');
const fs = require('fs');

const imagePath = './assets/track.png';

function startNodeApp() {
  return new Promise((succ, err) => {
    const targetWidth = 1000;

    sharp(imagePath).resize(targetWidth, null).raw().toBuffer().then(pixels => {
      console.log('--- Image loaded ---');
      pixels = pixels.filter((p, i) => i % 4 === 0);
      let pixelArr = [];

      for (let i = 0; i < targetWidth; i++) {
        pixelArr[i] = [];
      }

      let index = 0;
      let height = 0;
      for (let i = 0; index < pixels.length; i++) {
        for (let j = 0; j < targetWidth; j++) {
          pixelArr[j][i] = pixels[index++];
        }
        height++;
      }
      console.log(targetWidth, height);

      const result = {
        pixels: pixelArr,
        width: targetWidth,
        height: height
      };

      succ(result);
    });
  });
}

const logger = (net) => {
    fs.appendFileSync('fitnessResults/' + evolutionParams.evolutionParams.fitness.name + '.txt',
      `\n${Math.round(net.score)}: ${JSON.stringify(net.toJSON())}\n`);
};

const trainNet = () => {
  startNodeApp().then(img => {
    const world = new World(img, 1, 1);
    return train(robotParams.robotParams, world, evolutionParams.evolutionParams, logger)
  });
};

module.exports = { trainNet };