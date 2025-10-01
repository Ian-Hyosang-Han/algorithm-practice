function solution(s) {

  const len = s.length;
  const mid = Math.floor(len / 2);
  
  return len % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}

console.log(solution("abcde")); // "c"
console.log(solution("qwer"));  // "we"


/* Step-by-step Breakdown:

1) Get the string length
   - Store it once to avoid recomputing.
     const len = s.length;

2) Compute the middle index (0-based)
   - Math.floor(len / 2) gives the center index for odd lengths,
     and the right-middle index for even lengths.
     const mid = Math.floor(len / 2);
   - Math.floor() is a built-in JavaScript function that rounds a number down to the nearest integer (toward negative infinity).

3) Branch on parity of length
   - If len is odd: the middle character is exactly s[mid].
   - If len is even: the two middle characters are s[mid - 1] and s[mid],
     so concatenate them.

4) Return the result
   - Odd length → one character
   - Even length → two characters

*/