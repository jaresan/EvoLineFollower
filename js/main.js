import World from '../World';
import Robot from '../Robot';
import { run2 } from '../run';
import { animate } from '../animateRobot';
import { neatFromJSON } from '../NeuralController';
import { network3 as neuralNet } from '../networkResults/networks';

function getResizedImage(src, targetWidth) {
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
}

window.runApp = () => {
  getResizedImage('/assets/track.png', 1000).then(img => {
    console.log('--- Image loaded ---');
    window.img = img;
    const world = new World(img, 1, 1);
    window.world = world;
    // run2(world);

    const network = neatFromJSON(neuralNet);

    const robot = new Robot({
      x: 0.35,
      y: 0.88,
      rotation: 0,
      wheelBase: 0.01,
      behavior: {
        neuralNet: network,
        absoluteMin: 0,
        absoluteMax: 1
      }
    });
    window.animateRobot = animate.bind(this, robot, window.world);
//   window.moveRobot = (duration = 1, left, right) => {
//     if (left !== undefined && right !== undefined) {
//       a.setSpeedCoeff(left, right);
//     }
//     a.move(duration);
//     console.log(`Position: ${JSON.stringify(a.position)}, rotation: ${a.rotation}`);
//   };
  });
};

runApp();