function solution(n) {

    const waterMelon = "수박";

    return waterMelon.repeat(Math.ceil(n / 2)).slice(0, n);
}

console.log(solution(3)); // "수박수"
console.log(solution(4)); // "수박수박"


/* Step-by-step Breakdown (for the given code)

1) Purpose
   - Return a string of length n that follows the repeating pattern "수박수박수박...".
   - Example: n = 3 → "수박수", n = 4 → "수박수박".

2) Build enough pattern
   - Expression: "수박".repeat(Math.ceil(n / 2))
   - Reasoning:
     • Each repetition of "수박" contributes 2 characters.
     • To cover n characters, we need at least n/2 blocks of "수박".
     • Using Math.ceil ensures we don’t fall short when n is odd.
       - n = 3 → Math.ceil(1.5) = 2 → "수박수박" (length 4, safely ≥ n)
       - n = 4 → Math.ceil(2) = 2 → "수박수박" (length 4, exactly n)

3) Cut to exact length
   - Expression: .slice(0, n)
   - This trims the built string down to exactly n characters.
     • n = 3 → "수박수박".slice(0, 3) = "수박수"
     • n = 4 → "수박수박".slice(0, 4) = "수박수박"

Functions & Their Roles

• String.prototype.repeat(count)
  - Role: Creates a new string by repeating the receiver string count times.
  - Notes: count must be a finite non-negative integer (floored internally).

• Math.ceil(x)
  - Role: Returns the smallest integer greater than or equal to x.

• String.prototype.slice(start, end)
  - Role: Returns a substring from start (inclusive) to end (exclusive) without mutating the original.

*/