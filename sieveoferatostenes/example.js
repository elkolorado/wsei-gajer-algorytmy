const sieveoferatostenes = require('./sieveoferatostenes');

const N = 333;
const solver = new sieveoferatostenes(N);
const result = solver.solve();

console.log("Result:", result);