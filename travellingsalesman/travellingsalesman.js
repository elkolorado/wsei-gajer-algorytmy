class Configuration {
    constructor(N, range, AttemptsBetweenChangeRoad) {
        this.NumberOfCities = N;
        this.DrawRange = range;
        this.AttemptsBetweenChangeRoad = AttemptsBetweenChangeRoad;
    }
}

class Road {
    constructor(numberOfCities, cityLengthMatrix, parentRoad = null) {
        this.cityLengthMatrix = cityLengthMatrix;
        if (parentRoad) {
            this.path = this.mutatePath(parentRoad.path);
        } else {
            this.path = this.generateInitialPath(numberOfCities);
        }
        this.RoadLength = this.calculateRoadLength(this.path);
    }

    generateInitialPath(numberOfCities) {
        const path = Array.from({ length: numberOfCities }, (_, index) => index);
        return this.shuffleArray(path);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    mutatePath(path) {
        const newPath = [...path];
        const index1 = Math.floor(Math.random() * newPath.length);
        let index2 = Math.floor(Math.random() * newPath.length);
        while (index1 === index2) {
            index2 = Math.floor(Math.random() * newPath.length);
        }
        [newPath[index1], newPath[index2]] = [newPath[index2], newPath[index1]];
        return newPath;
    }

    calculateRoadLength(path) {
        let length = 0;
        for (let i = 0; i < path.length - 1; i++) {
            length += this.cityLengthMatrix[path[i]][path[i + 1]];
        }
        length += this.cityLengthMatrix[path[path.length - 1]][path[0]];
        return length;
    }
}

/**
 * Represents a Travelling Salesman problem solver.
 */
class TravellingSalesman {
    /**
     * Creates an instance of the TravellingSalesman class.
     * @param {number} N - The number of cities.
     * @param {object} range - The range of random values for city distances.
     * @param {number} AttemptsBetweenChangeRoad - The number of attempts between changing the road.
     */
    constructor(N, range, AttemptsBetweenChangeRoad) {
        this.Config = new Configuration(N, range, AttemptsBetweenChangeRoad);
        this.CityLengthMatrix = Array.from({ length: N }, () => Array(N).fill(0));
        this.generateRoadBetweenCities();
    }

    /**
     * Starts the Travelling Salesman algorithm.
     */
    start() {
        this.InitialRoad = new Road(this.Config.NumberOfCities, this.CityLengthMatrix);
        this.ParentRoad = new Road(this.Config.NumberOfCities, this.CityLengthMatrix, this.InitialRoad);
        const result = {
            AttemptsBetweenChangeRoad: this.Config.AttemptsBetweenChangeRoad,
            ResultAttemptCount: 0,
        };

        console.log(`Initial road has ${this.InitialRoad.RoadLength} meters.`);
        const Attempts = result.AttemptsBetweenChangeRoad;
        
        while (result.AttemptsBetweenChangeRoad > 0) {
            result.ResultAttemptCount++;
            this.ChildRoad = new Road(this.Config.NumberOfCities, this.CityLengthMatrix, this.ParentRoad);

            if (this.ChildRoad.RoadLength < this.ParentRoad.RoadLength) {
                console.log(`Found shorter road: ${this.ChildRoad.RoadLength} meters in ${Attempts - result.AttemptsBetweenChangeRoad} attempts.`);
                result.AttemptsBetweenChangeRoad = this.Config.AttemptsBetweenChangeRoad;
                this.ParentRoad = this.ChildRoad;
            }

            if (this.ChildRoad.RoadLength === this.ParentRoad.RoadLength) {
                result.AttemptsBetweenChangeRoad--;
                // console.log(`Road length is the same: ${this.ChildRoad.RoadLength} meters. Attempts left: ${result.AttemptsBetweenChangeRoad}`);
            }
        }

        console.log("\nSummary result:");
        console.log('Attempts between change road: ', this.Config.AttemptsBetweenChangeRoad)
        console.log('Cities: ', this.Config.NumberOfCities)
        console.log('Random range: ', this.Config.DrawRange)
        console.log('---')
        console.log(`First road: ${this.InitialRoad.path}`)
        console.log(`with length ${this.InitialRoad.RoadLength}`);
        console.log('---')
        console.log(`Last road: ${this.ParentRoad.path}`)
        console.log(`with length ${this.ParentRoad.RoadLength}`);
        console.log('---')
        console.log(`Total attempts: ${result.ResultAttemptCount}`);
    }

    /**
     * Generates random distances between cities and populates the CityLengthMatrix.
     */
    generateRoadBetweenCities() {
        for (let x = 0; x < this.CityLengthMatrix.length; x++) {
            for (let y = 0; y < this.CityLengthMatrix.length; y++) {
                if (x < y) this.CityLengthMatrix[x][y] = this.randomValue(this.Config.DrawRange);
                if (y > x) this.CityLengthMatrix[y][x] = this.CityLengthMatrix[x][y];
            }
        }
    }

    /**
     * Generates a random value within the specified range.
     * @param {object} range - The range of random values.
     * @returns {number} The random value.
     */
    randomValue(range) {
        return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    }
}

module.exports = TravellingSalesman;
