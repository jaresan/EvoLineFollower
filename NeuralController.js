const { Neat, Methods, Architect, Network } = require('./NEAT/libs/neataptic');

function createNeat(fitnessFunction, mutRate=0.8, pop=100, hiddenNeurons=3){
  return new Neat(5, 2, fitnessFunction, {
    mutation: Methods.Mutation.FFW,
    mutationRate: mutRate,
    elitism: 5,
    popsize: pop,
    network: Architect.Perceptron(5, hiddenNeurons, 2)
  });
}

function parseNetwork(json) {
  return Network.fromJSON(json);
}

function neatFromJSON(json) {
  return Network.fromJSON(json);
}

module.exports = { createNeat, parseNetwork, neatFromJSON };