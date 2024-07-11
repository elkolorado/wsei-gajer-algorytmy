# Sprawozdanie z Projektu: Metoda Monte Carlo

## Opis Projektu

Projekt polega na implementacji solvera Monte Carlo Integration w języku JavaScript. Solver ten służy do obliczania całki za pomocą metody Monte Carlo. Pozwala na znalezienie przybliżonej wartości całki oznaczonej na zadanym przedziale.

## Technologie

- **Język programowania:** JavaScript
- **Środowisko uruchomieniowe:** Node.js lub dowolna przeglądarka internetowa wspierająca JavaScript


## Przykład Użycia
Przykładowe użycie solvera Monte Carlo Integration:
```js
const MonteCarloIntegration = require('./montecarlo');

const settings = {
    a: 0, // Początek przedziału całkowania
    b: 1, // Koniec przedziału całkowania.
    n: 100000, // Liczba podprzedziałów (iteracji) używanych w metodzie numerycznej.
    f: x => Math.abs(Math.sin(x) + Math.sin(2 * x) + Math.sin(4 * x)), // zadana funkcja 
    epsilon: 0.000001 // Dokładność obliczeń numerycznych.
};

const solver = new MonteCarloIntegration(settings);
const integral = solver.solve();
console.log("Integral:", result); //wypisze Integral: 6.849703842975954
```

## Metoda rozwiązania
Metoda Monte Carlo Integration jest techniką numerycznego obliczania przybliżonej wartości całki. Polega ona na generowaniu losowych punktów wewnątrz zadanego przedziału i obliczaniu wartości funkcji w tych punktach. Następnie, na podstawie tych wartości, obliczana jest przybliżona wartość całki.

Generujemy losowe punkty wewnątrz zadanego przedziału. Następnie obliczamy wartość funkcji w tych punktach. Przybliżoną wartość całki otrzymujemy, dzieląc liczbę punktów, które znajdują się pod wykresem funkcji, przez liczbę wszystkich punktów. Im więcej punktów wygenerujemy, tym dokładniejsze przybliżenie otrzymamy.

Proces generowania punktów i obliczania wartości funkcji jest powtarzany aż do osiągnięcia zadanej dokładności, określonej przez parametr epsilon. Im mniejsza wartość epsilon, tym dokładniejsze przybliżenie otrzymamy, ale proces może zająć więcej czasu.

Metoda Monte Carlo Integration jest szczególnie przydatna w przypadku funkcji, dla których trudno jest znaleźć analityczne rozwiązanie całki. Dzięki tej metodzie możemy obliczyć przybliżoną wartość całki dla dowolnej funkcji, o ile mamy dostęp do jej definicji i możemy obliczyć wartość funkcji w dowolnym punkcie.

## Autor
Filip Zieliński
