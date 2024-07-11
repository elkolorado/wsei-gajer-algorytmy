const CubicEquationSolver = require('./cubic-equation');

// Example usage
const solver = new CubicEquationSolver(1, -1, 1, 1);
const roots = solver.solve();
console.log("Roots:", roots);