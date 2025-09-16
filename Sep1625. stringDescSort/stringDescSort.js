function solution(s) {
  return s.split("").sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    })
    .join("");
}

console.log(solution("Zbcdefg")); // "gfedcbZ"

/* Step-by-step Breakdown:

1. s.split('')
   - Splits the string `s` into an array of individual characters.
   - Example: "Zbcdefg".split('') → ["Z", "b", "c", "d", "e", "f", "g"]

2. .sort((a, b) => { ... })
   - The `sort` method arranges the elements of the array.
   - We provide a custom comparison function `(a, b)` to define the sorting order.
   - Default `.sort()` sorts as strings in ascending (small → large), 
     but we want descending (large → small).

3. if (a < b) return 1;
   - If `a` is smaller than `b`, return 1.
   - This tells `sort` to put `b` before `a`.
   - Example: comparing "b" and "c" → "b" < "c" → return 1 → "c" comes before "b".

4. if (a > b) return -1;
   - If `a` is greater than `b`, return -1.
   - This tells `sort` to put `a` before `b`.
   - Example: comparing "g" and "f" → "g" > "f" → return -1 → "g" comes before "f".

5. return 0;
   - If `a` and `b` are equal, no change in their order.

6. .join('')
   - After sorting, `join('')` merges the array back into a single string.
   - Example: ["g","f","e","d","c","b","Z"].join('') → "gfedcbZ"

7. Final Result
   - Input: "Zbcdefg"
   - Process: split → sort descending (uppercase < lowercase) → join
   - Output: "gfedcbZ"
*/