# Sprawozdanie z Projektu: Rozwiązywanie Równań Sześciennych

## Opis Projektu

Projekt polega na implementacji algorytmu do rozwiązywania równań sześciennych postaci $ax^3 + bx^2 + cx + d = 0$. Algorytm jest zaimplementowany w języku JavaScript i pozwala na znalezienie wszystkich rzeczywistych pierwiastków danego równania sześciennego.

## Technologie

- **Język programowania:** JavaScript
- **Środowisko uruchomieniowe:** Node.js lub dowolna przeglądarka internetowa wspierająca JavaScript

## Uruchomienie

Aby uruchomić projekt, należy mieć zainstalowane środowisko Node.js. Po sklonowaniu repozytorium, można uruchomić skrypt `cubic-equation.js` za pomocą polecenia:

```bash
node cubic-equation.js
```

## Przykład Użycia
Przykładowe wywołanie funkcji rozwiązującej równanie sześcienne:
```js
const roots = cubicEquationRoots(1, -4, 2, 2);
console.log(roots); // Wypisze Roots: [ 3.170086486626033, -0.4811943040920148, 1.3111078174659814 ]
```

## Metoda rozwiązania
Algorytm rozpoczyna od sprawdzenia, czy współczynnik przy najwyższej potędze (a) jest różny od zera. Następnie, korzystając z przekształceń i wzorów matematycznych, oblicza potencjalne pierwiastki równania. W zależności od wartości dyskryminanty (delta), algorytm rozróżnia trzy przypadki:

- Delta > 0: Równanie ma jedno rzeczywiste rozwiązanie.
- Delta = 0: Równanie ma dwa rzeczywiste rozwiązania.
- Delta < 0: Równanie ma trzy rzeczywiste rozwiązania.

## Autor
Filip Zieliński


