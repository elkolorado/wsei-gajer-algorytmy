/**
 * Represents the Sieve of Eratosthenes algorithm for finding prime numbers, twin numbers, and quadruplets.
 */
class SieveOfEratosthenes {
    /**
     * Creates an instance of SieveOfEratosthenes.
     * @param {number} N - The upper limit for finding prime numbers.
     */
    constructor(N) {
        this.N = N;
        this.primes = [];
        this.twinNumbers = [];
        this.quadruplets = [];
        this.sieve();
        this.findTwinNumbers();
        this.findQuadruplets();
    }

    /**
     * Performs the Sieve of Eratosthenes algorithm to find prime numbers up to N.
     */
    sieve() {
        const isPrime = new Array(this.N + 1).fill(true);
        isPrime[0] = isPrime[1] = false;

        for (let i = 2; i * i <= this.N; i++) {
            if (isPrime[i]) {
                for (let j = i * i; j <= this.N; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        for (let i = 2; i <= this.N; i++) {
            if (isPrime[i]) {
                this.primes.push(i);
            }
        }
    }

    /**
     * Finds twin numbers from the list of prime numbers.
     */
    findTwinNumbers() {
        for (let i = 0; i < this.primes.length - 1; i++) {
            if (this.primes[i + 1] - this.primes[i] === 2) {
                this.twinNumbers.push([this.primes[i], this.primes[i + 1]]);
            }
        }
    }

    /**
     * Finds quadruplets from the list of prime numbers.
     */
    findQuadruplets() {
        for (let i = 0; i < this.primes.length - 2; i++) {
            let p = this.primes[i];
            if (p + 2 === this.primes[i + 1] && p + 6 === this.primes[i + 2] && p + 8 === this.primes[i + 3]) {
                this.quadruplets.push([p, this.primes[i + 1], this.primes[i + 2], this.primes[i + 3]]);
            }
        }
    }

    solve() {
        return {
            primes: this.primes,
            twinNumbers: this.twinNumbers,
            quadruplets: this.quadruplets
        };
    }
}

module.exports = SieveOfEratosthenes;