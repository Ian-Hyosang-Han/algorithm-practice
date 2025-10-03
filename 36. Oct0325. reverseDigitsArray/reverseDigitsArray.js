function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((num) => Number(num));
}

console.log(solution(12345)); // [5, 4, 3, 2, 1]

/* Step-by-step Breakdown (Reverse Digits to Array)

1) Goal
   - Return an array of the digits of n in reverse order.
   - Example: 12345 → [5, 4, 3, 2, 1].

2) Convert number to string
   - `toString()` lets us treat each digit as a character.

3) Split into characters
   - `split("")` creates an array of digit characters.
   - "12345" → ["1","2","3","4","5"].

4) Reverse the array
   - `reverse()` flips the order.
   - ["1","2","3","4","5"] → ["5","4","3","2","1"].

5) Convert chars to numbers
   - `map(Number)` transforms each character into a numeric digit.
   - ["5","4","3","2","1"] → [5,4,3,2,1].

*/
