const { Neat, Methods, Architect, Network } = require('./NEAT/libs/neataptic');
const Networks = require('./networkResults/networks');

function createNeat(fitnessFunction, mutRate=0.8, pop=100, hiddenNeurons=3){
  Methods.Mutation.MOD_ACTIVATION.mutateOutput = false;
  let net = Architect.Perceptron(5, hiddenNeurons, 2);
  for(let node in net.nodes){
      if(net.nodes[node].type == 'output'){
        net.nodes[node].squash = Methods.Activation.TANH;
      }
  }

  return new Neat(5, 2, fitnessFunction, {
    mutation: Methods.Mutation.FFW,
    mutationRate: mutRate,
    elitism: 5,
    popsize: pop,
    //network: parseNetwork(Networks.secondTanhAttempt)
    network: net
  });
}

function parseNetwork(json) {
  return Network.fromJSON(json);
}

function neatFromJSON(json) {
  return Network.fromJSON(json);
}

module.exports = { createNeat, parseNetwork, neatFromJSON };