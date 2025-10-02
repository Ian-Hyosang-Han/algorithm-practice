function solution(n) {
  // Convert the number to a string → split into digits → convert to numbers → sum them up.
  return n.toString()
    .split("")
    .map((num) => Number(num))
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24

/* Step-by-step Breakdown (Sum of Digits)

1) Goal
   - Return the sum of all decimal digits of a natural number N.
   - Examples: 123 → 1+2+3=6, 987 → 9+8+7=24.

2) Convert number to string
   - `n.toString()`
   - Turns the number into a string so we can process each digit as a character.
   - Example: 987 → "987"

3) Split into characters
   - `.split("")`
   - Splits the string into an array of single-character strings.
   - "987" → ["9", "8", "7"]

4) Convert chars to numbers
   - `.map(num => Number(num))`
   - Converts each character back to a numeric digit.
   - ["9", "8", "7"] → [9, 8, 7]

5) Sum the digits
   - `.reduce((acc, cur) => acc + cur, 0)`
   - Accumulates the array into a single sum, starting from 0.
   - [9, 8, 7] → 0+9=9 → 9+8=17 → 17+7=24

6) Return result
   - The final value from `reduce` is returned as the answer.

7) Example trace
   - Input: N = 123
   - "123" → ["1","2","3"] → [1,2,3] → sum = 6
   - Output: 6

*/
