const World = require('../World');
const { train, test } = require('../run');
const { parseNetwork } = require('../NeuralController');
const Networks = require('../networkResults/networks');
const Params = require('../params');

const animationSpeedCoeff = 50;

const imagePath = '../assets/trackmff.png';

if (typeof window !== 'undefined') {
  const getResizedImage = (src, targetWidth) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        /// step 1
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const width = img.width;
        canvas.width = targetWidth;
        canvas.height = (canvas.width / width) * img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data.filter((p, i) => i % 4 === 0);
        let pixelArr = [];

        for (let i = 0; i < canvas.width; i++) {
          pixelArr[i] = [];
        }

        let index = 0;
        for (let i = 0; i < canvas.height; i++) {
          for (let j = 0; j < canvas.width; j++) {
            pixelArr[j][i] = pixels[index++];
          }
        }
        const result = {
          pixels: pixelArr,
          width: imageData.width,
          height: imageData.height,
          base64: canvas.toDataURL('img/png'),
          data: imageData
        };

        resolve(result);
      };

      img.src = src;
    });
  };

  window.runApp = () => {
    getResizedImage(imagePath, 1000).then(img => {
      console.log('--- Image loaded ---');
      const world = new World(img, 1, 1);

      window.train = () => {
        return train(Params.robotParams, world, Params.evolutionParams)
      };

      window.test = (network = Networks.firstTanhAttempt) => {
        const canvas = document.getElementById('canvasWrapper');
        if (canvas) {
          canvas.remove();
        }

        test(Params.robotParams, world, parseNetwork(network), animationSpeedCoeff);
        window.animateRobot();
      };
    });
  };

  runApp();
}