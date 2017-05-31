var Neat    = neataptic.Neat;
var Methods = neataptic.Methods;
var Architect = neataptic.Architect;

var neat;
var iteration = 0;


function createNeat(){
    neat = new Neat(5, 2, fitness, {
        // TODO: allow more mutations? allow different activation functions in hidden nodes?
        // TODO: mutating weights/bias is limited to (-1,1) - does it make sense?
        mutation: [
            Methods.Mutation.MOD_WEIGHT,
            Methods.Mutation.MOD_BIAS
        ],
        // TODO: ad hoc values, maybe change later
        mutationRate: 0.6,
        elitism: 5,
        popsize: 100,
        // TODO: 3 hidden neurons? or more?
        network: Architect.Perceptron(5, 3, 2)
    });

    setTimeout(loop, 1);
}


function loop(){
    neat.evolve();

    var network = neat.getFittest();

    $('.iteration').text(iteration);
    $('.bestfitness').text(network.score);
    $('.averagefitness').text(neat.getAverage());

    // stopping condition
    // TODO: change stopping condition accoring to new fitness (low threshold? max iteration? both?)
    if (network.score == 0){
        drawGraph(network.graph(500, 500), '.draw');
        document.getElementById("json").innerHTML = JSON.stringify(network.toJSON(), undefined, 2);
        return;
    }

    iteration++;
    setTimeout(loop, 1);
}

function fitness(genome){
    // >>>>>>> UNCLE SAM NEEDS YOU! <<<<<<<<<
    // var fitness = Simulator.simulate(genome); // or whatever...
    // return fitness;

    // dummy fitness (network learns to ouput [1,1] to any input (wow! such useful! very complicated! so cool!)
    var result = genome.activate([0,1,0,0,1]);
    var penalty = Math.abs(1 - result[0]) + Math.abs(1 - result[1]);
    return -penalty;
}


$( document ).ready(function() {
    createNeat();
    setTimeout(loop, 1);
});

