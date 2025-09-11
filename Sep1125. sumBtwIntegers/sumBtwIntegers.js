function solution(a, b) {
  if (a === b) return a;

  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const n = max - min + 1;

  return (n * (min + max)) / 2;
}

console.log(solution(3, 5)); // 12
console.log(solution(3, 3)); // 3
console.log(solution(5, 3)); // 12

/* Step-by-step Breakdown:

1) Handle the equal case
   - If a and b are the same, just return one of them.
     Example: a = 3, b = 3 → return 3

2) Find the smaller and larger values
   - Use Math.min(a, b) and Math.max(a, b) so the order doesn’t matter.
     Example: a = 5, b = 3 → min = 3, max = 5

3) Count how many integers are in the range
   - Formula: (max - min + 1)
     Example: range 3 to 5 → count = 5 - 3 + 1 = 3

4) Use the arithmetic series formula
   - Sum of numbers from min to max = (count * (min + max)) / 2
   - This avoids looping and is efficient.

5) Return the sum
   - Example: min = 3, max = 5, count = 3
     (3 * (3 + 5)) / 2 = (3 * 8) / 2 = 12
   - Return 12
*/
