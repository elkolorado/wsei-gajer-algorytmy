const MonteCarloIntegration = require('./montecarlo');

// Example usage
const settings = { a: 0, b: 2 * Math.PI, n: 100000, f: x => Math.abs(Math.sin(x) + Math.sin(2 * x) + Math.sin(4 * x)), epsilon: 0.000001 };
const solver = new MonteCarloIntegration(settings);
const integral = solver.solve();
console.log("Integral:", integral);