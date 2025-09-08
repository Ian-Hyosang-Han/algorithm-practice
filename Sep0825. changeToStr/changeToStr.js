function solution(arr) {
  return arr.join("");
}

console.log(solution(["a", "b", "c"])); // "abc"


/* Step-by-step Breakdown:

1) Input: an array of characters
   - Example: ["a", "b", "c"]

2) Use join('')
   - The Array.prototype.join method concatenates all array elements into a single string.
   - Passing an empty string '' as the separator means elements are joined directly without spaces.
   - ["a", "b", "c"].join('') → "abc"

3) Return the concatenated string
   - The function returns the single string built from all characters in the array.
   - Example: return "abc"
*/