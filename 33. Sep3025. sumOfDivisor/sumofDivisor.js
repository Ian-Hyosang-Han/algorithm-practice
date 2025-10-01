function solution(n) {

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(12)); // 28
console.log(solution(5));  // 6

/* Step-by-step Breakdown

1) Goal
   - Return the sum of all positive divisors of n.

2) Initialize accumulator
   - `let sum = 0;` starts the running total at zero.

3) Iterate candidates
   - `for (let i = 1; i <= n; i++)` checks every integer from 1 to n.

4) Divisibility test
   - `n % i === 0` means i divides n with no remainder → i is a divisor.

5) Accumulate
   - If i is a divisor, add it to `sum`.

6) Return
   - After the loop, return the total `sum`.

*/
