const { Neat, Methods, Architect, Network } = require('./NEAT/libs/neataptic');

function createNeat(fitnessFunction){
  return new Neat(5, 2, fitnessFunction, {
    mutation: [
      Methods.Mutation.MOD_WEIGHT,
      Methods.Mutation.MOD_BIAS
    ],
    mutationRate: 0.8,
    elitism: 5,
    popsize: 500,
    network: Architect.Perceptron(5, 4, 2)
  });
}

function parseNetwork(json) {
  return Network.fromJSON(json);
}

function neatFromJSON(json) {
  return Network.fromJSON(json);
}

module.exports = { createNeat, parseNetwork, neatFromJSON };