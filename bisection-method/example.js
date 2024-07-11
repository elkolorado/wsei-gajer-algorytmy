const BisectionNumericMethod = require('./bisection');

const settings = { MinValue: -100, MaxValue: 100, Delta: 0.001, Epsilon: 0.000001 };
const solver = new BisectionNumericMethod(settings);
const roots = solver.solve([1, -1, -1, -1, -1, 1]);

console.log("Roots:", roots);