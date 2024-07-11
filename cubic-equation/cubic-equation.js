/**
 * Solves a cubic equation of the form ax^3 + bx^2 + cx + d = 0.
 */
class CubicEquationSolver {
    /**
     * Constructs a new instance of the CubicEquationSolver class.
     * @param {number} a - The coefficient of x^3.
     * @param {number} b - The coefficient of x^2.
     * @param {number} c - The coefficient of x.
     * @param {number} d - The constant term.
     */
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    /**
     * Solves the cubic equation and returns an array of the real roots.
     * @returns {Array<number>} - An array of the real roots of the cubic equation.
     */
    solve() {
        if (this.a === 0) {
            throw new Error("Coefficient 'a' cannot be zero.");
        }

        const w = -(this.b / (3 * this.a));
        const p = ((3 * this.a * Math.pow(w, 2)) + (2 * this.b * w) + this.c) / this.a;
        const q = ((this.a * Math.pow(w, 3)) + (this.b * Math.pow(w, 2)) + (this.c * w) + this.d) / this.a;
        const delta = ((Math.pow(q, 2)) / 4) + ((Math.pow(p, 3)) / 27);

        const u = Math.cbrt((-q / 2) + Math.sqrt(delta));
        const v = Math.cbrt((-q / 2) - Math.sqrt(delta));

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
}

module.exports = CubicEquationSolver;