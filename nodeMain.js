const World = require('../World');
const { train } = require('../run');
const Params = require('../params');
const sharp = require('Sharp');

const imagePath = '../assets/track.png';

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


const trainNet = (fitness = Fitness.distance) => {
  startNodeApp().then(img => {
    const world = new World(img, 1, 1);
    return train(Params.robotParams, world, Params.evolutionParams)
  });
};

module.exports = { trainNet };