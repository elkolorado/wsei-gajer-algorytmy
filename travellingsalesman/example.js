const TravellingSalesman = require('./travellingsalesman');

const N = 500; // Number of cities
const range = { min: 10, max: 99 }; // Zakres losowych wartości dla odległości między miastami
const AttemptsBetweenChangeRoad = 100; // Liczba prób między zmianą trasy
const solver = new TravellingSalesman(N, range, AttemptsBetweenChangeRoad);
solver.start();