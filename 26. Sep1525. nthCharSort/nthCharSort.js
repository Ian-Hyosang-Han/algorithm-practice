function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    } else {
      return a[n].localeCompare(b[n]);
    }
  });
}

console.log(solution(["sun", "bed", "car"], 1)); // ["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); // ["abcd", "abce", "cdx"]


/* Step-by-step Breakdown:

1. sort(callback)
   - The `sort` method sorts the array using the provided callback function.
   - Example: [3, 1, 2].sort() → [1, 2, 3]

2. if (a[n] === b[n])
   - Compare the n-th characters of `a` and `b`.
   - If equal, apply dictionary order as a tiebreaker.

3. return a.localeCompare(b)
   - Compares two whole strings lexicographically.
   - Example: "abcd".localeCompare("abce") → -1  (so "abcd" comes first)

4. return a[n].localeCompare(b[n])
   - If the n-th characters are different, sort directly by those characters.

5. Final result
   - Strings are sorted primarily by the n-th character,
     and secondarily by dictionary order if tied.
   - Example: ["sun","bed","car"], n=1 → ["car","bed","sun"]

*/
