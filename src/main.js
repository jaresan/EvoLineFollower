const World = require('./simulator/world');
const { train, test } = require('./run');
const { parseNetwork } = require('./evolution/neat');
const Networks = require('../networkResults/networks');
const evolutionParams = require('./evolution/evolutionParams');
const robotParams = require('./simulator/robotParams');
require('./networksToDisplay');

const animationSpeedCoeff = 50;

const imagePath = '../assets/track.png';

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
                return train(robotParams.robotParams, world, evolutionParams.evolutionParams)
            };

            window.test = (network = Networks.supaFast) => {
                const canvas = document.getElementById('canvasWrapper');
                if (canvas) {
                    canvas.remove();
                }

                test(robotParams.robotParams, world, parseNetwork(network), animationSpeedCoeff);
                window.animateRobot();
            };

            //window.displayNet = (network = Networks.thirdTanhAttempt) => {
            //    let svg = document.createElement("svg");
            //    svg.setAttribute("id", "draw");
            //    svg.setAttribute("width", "500px");
            //    svg.setAttribute("height", "500px");
            //    document.body.appendChild(svg);
            //
            //    drawGraph(parseNetwork(network).graph(500, 500), '#draw');
            //};

        });
    };

    runApp();
}