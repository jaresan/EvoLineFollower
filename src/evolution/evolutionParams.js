const Fitness = require('./fitnessFunctions');

// parameters of the evolution
const evolutionParams = {
    mutationRate: 0.8,
    populationSize: 100,
    hiddenNeurons: 3, // initial number of hidden neurons (may change if adding/removing of nodes is allowed in the mutation)
    maxGenerations: 400,
    elite: 5,
    fitness: Fitness.noReverse
};

module.exports = { evolutionParams };