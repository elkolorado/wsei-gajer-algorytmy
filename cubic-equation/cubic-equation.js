/**
 * Solves a cubic equation of the form ax^3 + bx^2 + cx + d = 0.
 *
 * @param {number} a - The coefficient of x^3.
 * @param {number} b - The coefficient of x^2.
 * @param {number} c - The coefficient of x.
 * @param {number} d - The constant term.
 * @returns {Array<number>} - An array of the real roots of the cubic equation.
 */
function cubicEquationRoots(a, b, c, d) {
    if (a === 0) {
        throw new Error("Coefficient 'a' cannot be zero.");
    }

    const w = -(b / (3 * a));
    const p = ((3 * a * Math.pow(w, 2)) + (2 * b * w) + c) / a;
    const q = ((a * Math.pow(w, 3)) + (b * Math.pow(w, 2)) + (c * w) + d) / a;
    const delta = ((Math.pow(q, 2)) / 4) + ((Math.pow(p, 3))/ 27);

    u = Math.cbrt((-q / 2) + Math.sqrt(delta));
    v = Math.cbrt((-q / 2) - Math.sqrt(delta));

    if (delta > 0) {
        const x = u + v + w;
        return [x];

    } else if (delta === 0) {
        const x1 = w - 2 * Math.cbrt(q / 2);
        const x2 = w + Math.cbrt(q / 2);
        return [x1, x2];
    } else if (delta < 0) {
        const phi = Math.acos((3 * q) / (2 * p * Math.sqrt(-(p / 3))));
        const x1 = w + 2 * Math.sqrt(-(p / 3)) * Math.cos(phi / 3);
        const x2 = w + 2 * Math.sqrt(-(p / 3)) * Math.cos((phi / 3) + (2 / 3 * Math.PI));
        const x3 = w + 2 * Math.sqrt(-(p / 3)) * Math.cos((phi / 3) + (4 / 3 * Math.PI));
        return [x1, x2, x3];
    }

}

// Example usage
const a = 1;
const b = -4;
const c = 2;
const d = 2
const roots = cubicEquationRoots(a, b, c, d);
console.log("Roots:", roots);