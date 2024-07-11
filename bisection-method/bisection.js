class BisectionNumericMethod {
    constructor(settings) {
        /**
         * The settings for the bisection method.
         * @typedef {Object} BisectionSettings
         * @property {number} MinValue - The minimum value of the interval.
         * @property {number} MaxValue - The maximum value of the interval.
         * @property {number} Delta - The step size for the interval.
         * @property {number} Epsilon - The tolerance for the solution.
         */
        this.settings = settings;
    }

    /**
     * Solves a polynomial equation using the bisection method.
     * @param {Array<number>} parameters - The coefficients of the polynomial equation.
     * @returns {Array<number>} - An array of the real roots of the polynomial equation.
     */
    solve(parameters) {
        const { MinValue, MaxValue, Delta, Epsilon } = this.settings;
        const horner = (x, params) => params.reduce((acc, p) => acc * x + p, 0);

        let N = { Left: MinValue, NumberOfRoots: 0, Roots: [] };

        while (N.Left < MaxValue) {
            N.Right = N.Left + Delta;
            let nValueLeft = horner(N.Left, parameters);
            let nValueRight = horner(N.Right, parameters);

            if (nValueLeft * nValueRight < 0) {
                N.NumberOfRoots++;
                while (true) {
                    N.Middle = (N.Left + N.Right) / 2;
                    if (Math.abs(N.Left - N.Middle) < Epsilon) break;

                    const nValueMiddle = horner(N.Middle, parameters);

                    if (Math.abs(nValueMiddle) < Epsilon) break;

                    if (nValueLeft * nValueMiddle < 0) {
                        N.Right = N.Middle;
                    } else {
                        N.Left = N.Middle;
                        nValueLeft = nValueMiddle;
                    }
                }
                N.Roots.push(N.Middle);
            }

            N.Left += Delta;
        }

        return N.Roots;
    }
}


module.exports = BisectionNumericMethod;