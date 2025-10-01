function solution(strArr) {
  return strArr.filter((str) => !str.includes("ad"));
}

solution(["and", "notad", "abcd"]); // ["and","abcd"]
solution(["there", "are", "no", "a", "ds"]); // ["there","are","no","a","ds"]


/* Step-by-step Breakdown:

1. filter(callback)
    - Iterates over the array and returns a NEW array containing only the elements
      for which the callback returns true (order is preserved; original is not mutated).
      Example: [1, 2, 3, 4].filter(n => n % 2 === 0) → [2, 4]

2. includes("ad")
    - For each string, checks whether the substring "ad" exists.
      Returns true if found, false otherwise.
      Example: "notad".includes("ad") → true
               "and".includes("ad")   → false

3. ! (logical NOT)
    - Negates the boolean result so that strings WITHOUT "ad" become true (kept),
      and strings WITH "ad" become false (filtered out).
      Example: !"notad".includes("ad") → false  (excluded)
               !"and".includes("ad")   → true   (kept)

4. Put together
    - Keep only elements where !str.includes("ad") is true — i.e., strings that
      do NOT contain "ad".
      Example: ["and","notad","abcd"].filter(s => !s.includes("ad"))
               → ["and","abcd"]
*/