# Bisection Method

To jest implementacja metody bisekcji w języku JavaScript do rozwiązywania równań wielomianowych.

## Użycie

Aby skorzystać z metody bisekcji, wykonaj następujące kroki:

1. Utwórz instancję klasy `BisectionNumericMethod`, przekazując żądane ustawienia jako obiekt.
2. Wywołaj metodę `solve`, przekazując współczynniki równania wielomianowego jako tablicę.
3. Metoda zwróci tablicę rzeczywistych pierwiastków równania wielomianowego.

```javascript
const BisectionNumericMethod = require('./bisection');

// Zdefiniuj ustawienia dla metody bisekcji
const settings = {
    MinValue: -100,     // Minimalna wartość przedziału
    MaxValue: 100,      // Maksymalna wartość przedziału
    Delta: 0.001,        // Wielkość kroku dla przedziału
    Epsilon: 0.000001    // Tolerancja rozwiązania
};

// Utwórz instancję klasy BisectionNumericMethod
const bisection = new BisectionNumericMethod(settings);

// Zdefiniuj współczynniki równania wielomianowego
const parameters = [1, -1, -1, -1, -1, 1]; // x^5-x^4-x^3-x^2-x^1+1=0

// Rozwiąż równanie wielomianowe przy użyciu metody bisekcji
const roots = bisection.solve(parameters);

console.log('Rzeczywiste pierwiastki:', roots); 
// zwróci 'Rzeczywiste pierwiastki: [ -1.0000009764490632, 0.531009765738438, 1.8832041016758414 ]'
```

## Metoda rozwiązania

Metoda bisekcji polega na podziale przedziału na pół i sprawdzeniu, w której połowie znajduje się pierwiastek równania. Następnie proces jest powtarzany dla odpowiedniej połowy przedziału, aż do znalezienia dostatecznie dokładnego przybliżenia pierwiastka.

Algorytm metody bisekcji można opisać w następujących krokach:

1. Wybierz przedział początkowy, w którym znajduje się pierwiastek. Przedział ten musi spełniać warunek, że wartości funkcji na jego krańcach mają różne znaki.
2. Podziel przedział na pół, obliczając środek przedziału.
3. Oblicz wartość funkcji w punkcie środkowym.
4. Jeśli wartość funkcji w punkcie środkowym jest dostatecznie bliska zeru (czyli spełnia tolerancję rozwiązania), zakończ algorytm i zwróć punkt środkowy jako przybliżenie pierwiastka.
5. W przeciwnym razie, sprawdź w której połowie przedziału znajduje się pierwiastek (czy wartości funkcji na krańcach połówek mają różne znaki).
6. Powtórz kroki 2-5 dla odpowiedniej połowy przedziału, aż do znalezienia dostatecznie dokładnego przybliżenia pierwiastka.

Metoda bisekcji jest stosowana do rozwiązywania równań, gdy nie jest znane dokładne rozwiązanie analityczne. Jest to prosty, ale skuteczny algorytm numeryczny do znajdowania pierwiastków równań wielomianowych.

## Autor
Filip Zieliński

