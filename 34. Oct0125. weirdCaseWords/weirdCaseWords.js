function solution(s) {
  return s
    .split(" ") // split the string into words by spaces
    .map((word) => {
      return word
        .split("") // split each word into characters
        .map((char, index) =>
          index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join(""); // join characters back into a word
    })
    .join(" "); // join words back with spaces
}

console.log(solution("try hello world")); // "TrY HeLlO WoRlD"

/* Step-by-step Breakdown (Weird Case by Word)

1) Split into words
   - `.split(" ")` splits the string on spaces into an array of words.
   - Multiple spaces produce empty strings (""), which lets us preserve
     the exact spacing when we join later.

2) Transform each word
   - `.map(word => { ... })` applies a per-word transformation.

3) Split word into characters
   - `word.split("")` turns the word into an array of characters so we can index them.

4) Case by position
   - `.map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())`
     • Even index → `toUpperCase()`
     • Odd index  → `toLowerCase()`

5) Rebuild each word
   - `.join("")` concatenates the transformed characters back into a word.

6) Rebuild the sentence
   - `.join(" ")` concatenates all transformed words with spaces.
   - Because we used the same separator (" "), original spacing (including multiple spaces)
     is preserved through empty-string elements.

*/