import { Neat, Methods, Architect, Network } from './NEAT/libs/neataptic';

export function createNeat(fitnessFunction){
  return new Neat(5, 2, fitnessFunction, {
    mutation: [
      Methods.Mutation.MOD_WEIGHT,
      Methods.Mutation.MOD_BIAS
    ],
    mutationRate: 0.6,
    elitism: 5,
    popsize: 50,
    network: Architect.Perceptron(5, 4, 2)
  });
}

export function parseNetwork(json) {
  return Network.fromJSON(json);
}

export function neatFromJSON(json) {
  return Network.fromJSON(json);
}


function fitness(genome){
  // >>>>>>> UNCLE SAM NEEDS YOU! <<<<<<<<<
  // var fitness = Simulator.simulate(genome); // or whatever...
  // return fitness;

  // dummy fitness (network learns to ouput [1,1] to any input (wow! such useful! very complicated! so cool!)
  const result = genome.activate([0,1,0,0,1]);
  const penalty = Math.abs(1 - result[0]) + Math.abs(1 - result[1]);
  return -penalty;
}
