function solution(seoul) {

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") return `Mr. Kim is at ${i}`;
  }

}

console.log(solution(["Jane", "Kim"])); // "Mr. Kim is at 1"

/* Step-by-step Breakdown:

1) Function definition
   - `function solution(seoul) { ... }`
   - Defines a function that takes an array `seoul` as input.

2) For loop
   - `for (let i = 0; i < seoul.length; i++)`
   - Iterates over the array from index 0 up to `seoul.length - 1`.

3) Conditional check
   - `if (seoul[i] === "Kim")`
   - At each index `i`, check if the current element is equal to the string "Kim".

4) Return statement
   - `return \`Mr. Kim is at ${i}\`;`
   - As soon as "Kim" is found, return a string with the index inserted.
   - Example: if `i = 1`, the return value is `"Mr. Kim is at 1"`.

5) End of loop
   - Because "Kim" is guaranteed to appear once, the function will always return inside the loop.
   - No need for extra handling after the loop.

6) Example run
   - Input: `["Jane", "Kim"]`
   - Loop starts at i = 0 → seoul[0] = "Jane" → not equal to "Kim".
   - Loop continues at i = 1 → seoul[1] = "Kim" → condition true → return `"Mr. Kim is at 1"`.
*/