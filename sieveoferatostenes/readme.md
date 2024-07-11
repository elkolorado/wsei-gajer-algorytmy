# Sprawozdanie z Projektu: Sito Eratostenesa

## Opis Projektu

Projekt polega na implementacji algorytmu Sita Eratostenesa w języku JavaScript. Algorytm ten służy do znajdowania liczb pierwszych, liczb bliźniaczych oraz czwórek liczb pierwszych.

## Technologie

- **Język programowania:** JavaScript
- **Środowisko uruchomieniowe:** Node.js lub dowolna przeglądarka internetowa wspierająca JavaScript


## Przykład Użycia
Przykładowe użycie algorytmu Sita Eratostenesa:
```js
const SieveOfEratosthenes = require('./sieveoferatosthenes');

const N = 333; // koniec przedziału wyznaczania liczb
const solver = new SieveOfEratosthenes(N);
const result = solver.solve();
console.log("Result", result);
```
Dla `N=333` da w wyniku:
```bash
Result: {
  primes: [
      2,   3,   5,   7,  11,  13,  17,  19,  23,  29,  31,
     37,  41,  43,  47,  53,  59,  61,  67,  71,  73,  79,
     83,  89,  97, 101, 103, 107, 109, 113, 127, 131, 137,
    139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193,
    197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257,
    263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331
  ],
  twinNumbers: [
    [ 3, 5 ],     [ 5, 7 ],
    [ 11, 13 ],   [ 17, 19 ],
    [ 29, 31 ],   [ 41, 43 ],
    [ 59, 61 ],   [ 71, 73 ],
    [ 101, 103 ], [ 107, 109 ],
    [ 137, 139 ], [ 149, 151 ],
    [ 179, 181 ], [ 191, 193 ],
    [ 197, 199 ], [ 227, 229 ],
    [ 239, 241 ], [ 269, 271 ],
    [ 281, 283 ], [ 311, 313 ]
  ],
  quadruplets: [
    [ 5, 7, 11, 13 ],
    [ 11, 13, 17, 19 ],
    [ 101, 103, 107, 109 ],
    [ 191, 193, 197, 199 ]
  ]
}
```

## Metoda rozwiązania
Algorytm Sita Eratostenesa jest używany do znajdowania liczb pierwszych w zadanym zakresie. Polega on na oznaczaniu liczb jako pierwsze lub złożone na podstawie ich wielokrotności. Algorytm rozpoczyna się od oznaczenia wszystkich liczb jako pierwsze, a następnie iteracyjnie oznacza wielokrotności kolejnych liczb jako złożone. Po zakończeniu algorytmu, wszystkie nieoznaczone liczby są liczbami pierwszymi.

Na podstawie listy liczb pierwszych, algorytm znajduje liczby bliźniacze, czyli pary liczb pierwszych, których różnica wynosi 2. Dodatkowo, algorytm znajduje czwórki liczb pierwszych, w których pierwsza liczba jest odległa od drugiej o 2, od trzeciej o 6, a od czwartej o 8.

Algorytm Sita Eratostenesa jest efektywnym sposobem znajdowania liczb pierwszych w dużym zakresie. Dzięki temu algorytmowi możemy szybko i skutecznie znaleźć liczby pierwsze, liczby bliźniacze oraz czwórki liczb pierwszych.

## Autor
Filip Zieliński

