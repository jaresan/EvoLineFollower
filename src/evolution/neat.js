const { Neat, Methods, Architect, Network } = require('./libs/neataptic');
const Networks = require('../../networkResults/networks');


// create new instance of the NEAT algorithm
function createNeat(inputSize, outputSize, hiddenSize, fitnessFunction, mutRate, pop, elite){
    // create initial network to fill the first generation
    let net = Architect.Perceptron(inputSize, hiddenSize, outputSize);

    // change the activation function for output neurons to TANH (gives (-1,1) instead of (0,1))
    for(let node in net.nodes){
        if(net.nodes[node].type == 'output'){
            net.nodes[node].squash = Methods.Activation.TANH;
        }
    }

    // do not allow the output activation to be mutated
    Methods.Mutation.MOD_ACTIVATION.mutateOutput = false;

    // create NEAT algorithm
    return new Neat(inputSize, outputSize, fitnessFunction, {
        mutation: Methods.Mutation.FFW, // all mutation applicable to feed-forward network
        mutationRate: mutRate,
        elitism: elite,
        popsize: pop,
        //network: parseNetwork(Networks.secondTanhAttempt)
        network: net
    });
}

function parseNetwork(json) {
    return Network.fromJSON(json);
}

module.exports = { createNeat, parseNetwork };