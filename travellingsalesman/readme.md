# Sprawozdanie z Projektu: Metoda Monte Carlo

## Opis projektu

Następujący kod przedstawia rozwiązanie problemu komiwojażera w języku JavaScript. Składa się z kilku klas i metod, które obsługują generowanie losowych ścieżek oraz obliczanie długości tras.

## Technologie

- **Język programowania:** JavaScript
- **Środowisko uruchomieniowe:** Node.js lub dowolna przeglądarka internetowa wspierająca JavaScript


## Użycie
Aby skorzystać z algorytmu komiwojażera, utwórz instancję klasy `Komiwojażer` z pożądanymi parametrami konfiguracyjnymi. Następnie wywołaj metodę `start`, aby rozpocząć algorytm. Algorytm wyświetli początkową trasę, końcową trasę i podsumowanie wyniku.

```js
const TravellingSalesman = require('./travellingsalesman');

const N = 500; // Number of cities
const range = { min: 10, max: 99 }; // Zakres losowych wartości dla odległości między miastami
const AttemptsBetweenChangeRoad = 100; // Liczba prób między zmianą trasy
const solver = new TravellingSalesman(N, range, AttemptsBetweenChangeRoad);
solver.start();
```

Powyższy kod zwróci (dla losowych długości miast), po wykorzystaniu wszystkich dostępnych prób
```batch
Summary result:
Attempts between change road:  100
Cities:  500
Random range:  { min: 10, max: 99 }
---
First road: 25,448,498,191,137,109,227,295,440,141,61,118,347,289,461,325,195,205,52,189,266,254,305,53,210,234,17,1,8,112,174,199,467,377,302,197,44,429,231,214,151,211,494,315,248,194,190,117,232,100,321,259,123,7,88,28,412,244,281,158,271,23,219,375,424,32,396,269,143,427,252,495,288,163,135,464,296,229,184,201,421,478,41,488,27,431,437,310,332,465,348,69,490,249,415,114,449,394,81,95,353,5,474,98,149,492,223,49,351,357,202,404,171,110,442,15,458,222,38,107,39,338,127,274,51,72,169,126,451,196,97,80,168,392,312,439,204,326,283,241,225,406,341,342,497,9,256,103,238,460,34,462,90,329,487,47,37,240,185,476,239,399,371,18,489,93,30,235,74,263,120,167,55,407,346,337,177,181,298,334,304,142,59,170,477,178,345,384,262,336,372,111,24,335,147,320,73,134,323,233,116,481,165,146,455,426,26,343,390,402,250,56,276,330,186,260,273,297,145,380,355,275,376,339,86,452,434,31,403,303,179,206,172,2,162,365,454,286,401,344,160,45,101,291,383,242,228,216,208,268,166,261,200,277,68,471,203,267,63,293,370,469,352,121,485,193,409,410,85,423,119,173,272,385,213,400,314,264,144,148,381,327,360,340,420,35,42,64,300,482,313,46,237,294,182,105,257,236,245,413,382,130,157,361,13,363,192,132,496,215,198,6,373,393,43,366,212,188,364,430,308,67,77,472,278,0,57,463,486,128,78,138,350,76,159,175,287,466,40,71,10,441,301,368,292,156,246,491,243,62,82,152,84,422,468,284,129,435,484,133,253,367,11,270,54,83,29,140,164,104,324,124,444,425,362,12,4,209,453,218,411,70,316,438,378,436,161,369,122,306,265,87,58,359,136,247,331,131,230,307,479,187,48,398,419,139,459,374,153,154,285,358,395,322,391,217,445,408,14,20,389,470,155,282,290,22,19,428,443,92,224,386,207,50,354,106,66,388,480,299,115,65,75,319,125,176,79,328,183,150,60,3,387,446,473,255,333,226,483,475,457,91,433,414,447,356,96,279,311,102,94,418,499,89,280,309,16,397,258,108,349,432,317,450,99,33,416,318,21,36,417,493,456,220,113,379,180,221,405,251
with length 27520
---
Last road: 425,265,311,112,343,109,172,139,384,459,40,342,218,347,199,208,401,358,280,108,325,59,289,255,432,268,393,498,305,448,86,418,461,398,375,406,446,372,170,259,168,439,416,485,341,85,252,469,183,193,88,73,123,355,236,247,450,410,167,336,175,169,179,430,142,250,404,422,120,464,470,321,266,308,260,44,101,496,483,115,348,27,300,180,230,438,224,70,332,225,273,340,171,33,79,283,451,105,337,93,242,5,474,256,149,345,296,263,232,84,36,274,16,473,221,365,49,97,126,257,176,457,413,479,51,141,436,61,67,315,45,100,75,39,478,472,411,368,35,281,151,378,133,282,323,346,494,431,414,475,454,238,391,21,174,227,91,94,435,445,206,261,197,58,92,212,361,493,460,366,154,298,420,407,34,143,220,222,477,184,114,373,116,215,360,319,295,440,178,381,429,241,118,23,279,320,209,195,233,443,77,307,486,122,465,62,405,217,161,270,64,90,98,290,417,333,392,297,344,330,484,43,301,165,248,452,350,99,41,303,453,327,310,480,160,369,476,71,22,462,302,129,304,468,383,278,96,216,237,291,258,63,190,17,394,228,214,466,251,382,287,128,56,331,229,492,134,379,188,103,189,313,163,385,57,277,386,136,121,458,442,144,426,395,6,419,371,150,148,226,335,253,488,294,240,402,351,449,157,210,421,329,400,314,74,239,374,396,317,338,499,182,275,18,0,125,25,204,138,213,102,495,427,456,72,334,403,9,177,152,132,249,104,487,46,76,326,107,50,127,187,29,137,14,292,66,117,262,42,10,271,202,424,52,95,119,30,111,219,231,19,367,339,491,54,370,434,15,60,286,87,131,245,328,359,357,140,376,124,47,159,26,155,244,11,1,12,3,48,4,380,135,145,437,293,409,164,467,482,32,38,489,191,20,198,267,89,181,399,192,153,412,306,288,207,55,318,408,364,8,389,363,205,254,78,223,377,276,65,284,353,423,234,471,362,106,201,388,173,130,235,309,299,7,272,444,463,196,352,185,83,186,387,349,162,53,156,113,354,28,31,285,433,264,82,447,324,147,68,269,390,455,441,37,13,490,322,397,80,312,69,481,24,110,428,158,497,81,356,211,194,146,166,415,246,316,2,243,200,203
with length 7404
---
Total attempts: 14437093
```

### Klasa Konfiguracji
Klasa `Configuration` jest odpowiedzialna za przechowywanie parametrów konfiguracyjnych dla algorytmu komiwojażera. Posiada właściwości takie jak liczba miast, zakres losowych wartości dla odległości między miastami oraz liczba prób między zmianą trasy.

### Klasa Trasy
Klasa `Road` reprezentuje trasę w problemie komiwojażera. Posiada metody do generowania początkowej ścieżki, tasowania ścieżki, mutowania ścieżki oraz obliczania długości trasy na podstawie macierzy odległości między miastami.

### Klasa Komiwojażera
Klasa `TravellingSalesman` jest główną klasą, która rozwiązuje problem komiwojażera. Przyjmuje parametry konfiguracyjne i generuje macierz odległości między miastami. Następnie rozpoczyna algorytm, tworząc początkową trasę i trasę rodzicielską. Iteracyjnie generuje trasy potomne i porównuje ich długości z trasą rodzicielską. Jeśli zostanie znaleziona krótsza trasa, staje się ona nową trasą rodzicielską. Algorytm kontynuuje do momentu osiągnięcia określonej liczby prób między zmianą trasy.

Klasa zawiera również metody do generowania losowych odległości między miastami i wypełniania macierzy odległości między miastami, a także metodę do generowania losowej wartości w określonym zakresie.

## Podsumowanie
Problem komiwojażera to klasyczny problem optymalizacyjny, polegający na znalezieniu najkrótszej możliwej trasy, która odwiedza daną grupę miast i wraca do miasta początkowego. Algorytm zaimplementowany w tym kodzie dostarcza przybliżonego rozwiązania przy użyciu podejścia losowego.

## Autor: Filip Zieliński

