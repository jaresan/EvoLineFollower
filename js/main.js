import World from '../World';
import { train, test } from '../run';
import * as Fitness from '../constants/fitnessFunctions';
import { parseNetwork } from '../NeuralController';
import * as Networks from '../networkResults/networks';

const servoStop = 1500;
const robotParams = {
  position: {
    x: 0.50,
    y: 0.875,
  },
  sensorInterval: 0.02,
  maxSpeed: 0.5, // proc byla puvodne mensi nez startSpeed? (0.05 < 0.3)
  startSpeed: [0.3, 0.3],
  servoStop: servoStop,
  servoSpeedSpread: 200,
  leftServoCoeff: 1,
  rightServoCoeff: -1,
  rotation: 180, // trying other way
  wheelBase: 0.1,
  sensorDeltas: [ // Sensor position in relation to the center of the wheel axel -> [deltaX, deltaY] in meters
    [0.1, 0.05],
    [0.1, 0.02],
    [0.1, 0],
    [0.1, -0.02],
    [0.1, -0.05]
  ],
  sensorRadius: 0.005, // Half of the square side of the sensor (to know how much the sensor can see)
  behavior: {
    neuralNet: {
      activate: () => [-100, -100]
    },
    absoluteMin: -1,
    absoluteMax: 1
  }
};

const animationSpeedCoeff = 10;

function run(robotParams, world) {
  // train(robotParams, world, Fitness.middleOnLine);
  test(robotParams, world, parseNetwork(Networks.network7), animationSpeedCoeff);
}

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
    const world = new World(img, 1, 1);
    // run(robotParams, world);

    window.train = (fitness = Fitness.distance) => {
      return train(robotParams, world, fitness)
    };

    window.test = (network = Networks.networkManual) => {
      const canvas = document.body.getElementsByTagName('canvas')[0];
      if (canvas) {
        document.body.removeChild(canvas);
      }

      test(robotParams, world, parseNetwork(network), animationSpeedCoeff);
      window.animateRobot();
    };

  });
};

runApp();