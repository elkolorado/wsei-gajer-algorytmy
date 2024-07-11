# Sprawozdanie z Projektu: Rozwiązywanie Równań Sześciennych

## Opis Projektu

Projekt polega na implementacji algorytmu do rozwiązywania równań sześciennych postaci $ax^3 + bx^2 + cx + d = 0$. Algorytm jest zaimplementowany w języku JavaScript i pozwala na znalezienie wszystkich rzeczywistych pierwiastków danego równania sześciennego.

## Technologie

- **Język programowania:** JavaScript
- **Środowisko uruchomieniowe:** Node.js lub dowolna przeglądarka internetowa wspierająca JavaScript


## Przykład Użycia
Przykładowe wywołanie funkcji rozwiązującej równanie sześcienne:
```js
const CubicEquationSolver = require('./cubic-equation');

const solver = new CubicEquationSolver(1, -1, 1, 1);
const roots = solver.solve();
console.log("Roots:", roots); //wypisze Roots: [ -0.5436890126920766 ]
```

## Metoda rozwiązania
Algorytm rozpoczyna od sprawdzenia, czy współczynnik przy najwyższej potędze (a) jest różny od zera. Następnie, korzystając z przekształceń i wzorów matematycznych, oblicza potencjalne pierwiastki równania. W zależności od wartości dyskryminanty (delta), algorytm rozróżnia trzy przypadki:

- Delta > 0: Równanie ma jedno rzeczywiste rozwiązanie.
- Delta = 0: Równanie ma dwa rzeczywiste rozwiązania.
- Delta < 0: Równanie ma trzy rzeczywiste rozwiązania.

## Autor
Filip Zieliński


