function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(solution(118372)); // 873211

/* Step-by-step Breakdown (Sort Digits in Descending Order)

1) Convert to string
   - `toString()` lets us treat each digit individually.

2) Split into characters
   - `split("")` produces an array of single-digit strings.

3) Sort numerically (descending)
   - `.sort((a, b) => b - a)` uses a numeric comparator.
   - Important: default string sort would be lexicographic; comparator ensures numeric order.

4) Join back to a string
   - `join("")` reconstructs the digits in the new order.

5) Convert back to number
   - `Number(...)` returns the final integer.

*/
