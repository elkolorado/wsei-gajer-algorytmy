/**
 * Represents a Monte Carlo Integration solver.
 */
class MonteCarloIntegration {
    /**
     * Creates a new instance of the MonteCarloIntegration class.
     * @param {Object} settings - The settings for the Monte Carlo Integration.
     * @param {number} settings.a - The lower bound of the integration interval.
     * @param {number} settings.b - The upper bound of the integration interval.
     * @param {number} settings.n - The number of random points to generate.
     * @param {Function|number[]} settings.f - The function to integrate or an array of coefficients for a polynomial function.
     * @param {number} settings.epsilon - The desired accuracy of the integration result.
     */
    constructor(settings) {
        this.settings = settings;
    }

    /**
     * Solves the Monte Carlo Integration problem and returns the result.
     * @returns {number} The result of the Monte Carlo Integration.
     */
    solve() {
        const { a, b, n, f, epsilon } = this.settings;
        // return monteCarloIntegration(a, b, n, f, epsilon);
        let integral = 0;
        let sum = 0;
        let i = 0;
    
        while (i < n) {
            const x = a + Math.random() * (b - a);
            sum += this.evaluateFunction(f, x);
            i++;
            
            if (i % 1000 === 0) {
                const prevIntegral = integral;
                integral = (b - a) * sum / i;
                
                if (Math.abs(integral - prevIntegral) < epsilon) {
                    break;
                }
            }
        }
    
        return integral;
    }

    /**
     * Evaluates the function at the given value of x.
     * @param {Function|number[]} f - The function to evaluate or an array of coefficients for a polynomial function.
     * @param {number} x - The value of x.
     * @returns {number} The result of evaluating the function at x.
     */
    evaluateFunction(f, x) {
        if (Array.isArray(f)) {
            return this.horner(f, x);
        } else {
            return f(x);
        }
    }

    /**
     * Evaluates a polynomial function using Horner's method.
     * @param {number[]} coefficients - The coefficients of the polynomial function.
     * @param {number} x - The value of x.
     * @returns {number} The result of evaluating the polynomial function at x.
     */
    horner(coefficients, x) {
        return coefficients.reduce((result, coefficient) => result * x + coefficient, 0);
    }
}

module.exports = MonteCarloIntegration;

