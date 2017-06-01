import { Neat, Methods, Architect } from './NEAT/libs/neataptic';

export function createNeat(fitnessFunction){
  return new Neat(5, 2, fitnessFunction, {
    mutation: [
      Methods.Mutation.MOD_WEIGHT,
      Methods.Mutation.MOD_BIAS
    ],
    mutationRate: 0.6,
    elitism: 5,
    popsize: 100,
    network: Architect.Perceptron(5, 3, 2)
  });
}


function loop(){
  neat.evolve();

  const network = neat.getFittest();

  // stopping condition
  // TODO: change stopping condition accoring to new fitness (low threshold? max iteration? both?)
  if (network.score == 0){
    drawGraph(network.graph(500, 500), '.draw');
    document.getElementById("json").innerHTML = JSON.stringify(network.toJSON(), undefined, 2);
    return;
  }
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
