function solution(s, n) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    // 1) keep spaces as-is
    if (char === " ") {
      result += " ";
      continue;
    }

    // 2) get code point
    let code = s.charCodeAt(i);

    // 3) uppercase A–Z
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(((code - 65 + n) % 26) + 65);
    }
    // 4) lowercase a–z
    else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(((code - 97 + n) % 26) + 97);
    }
  }

  return result;
}

console.log(solution("AB", 1));     // "BC"
console.log(solution("z", 1));      // "a"
console.log(solution("a B z", 4));  // "e F d"

/* Step-by-step Breakdown (Caesar Cipher)

1) Goal
   - Shift each alphabetic character by n positions (wrapping within A–Z or a–z).
   - Preserve spaces exactly.

2) Iterate over s
   - Loop from index 0 to s.length - 1 and examine each character.

3) Preserve spaces
   - If the current character is " ", append a space and continue to next iteration.

4) Get the character code
   - `charCodeAt(i)` returns the UTF-16 code unit (works for ASCII letters).
   - 'A'..'Z' → 65..90, 'a'..'z' → 97..122.

5) Uppercase branch (A–Z)
   - Normalize to 0–25: `(code - 65)`
   - Shift by n: `(code - 65 + n)`
   - Wrap within alphabet: `% 26`
   - Convert back to code: `... + 65`
   - Convert to character: `String.fromCharCode(...)`

6) Lowercase branch (a–z)
   - Same idea but relative to 'a' (97):
     `(code - 97 + n) % 26 + 97`, then `fromCharCode`.

7) Return the final string
   - After processing all characters, return `result`.

8) Example trace ("a B z", n = 4)
   - 'a' (97) → ((97 - 97 + 4) % 26) + 97 = 101 → 'e'
   - ' ' → ' '
   - 'B' (66) → ((66 - 65 + 4) % 26) + 65 = 70 → 'F'
   - ' ' → ' '
   - 'z' (122) → ((122 - 97 + 4) % 26) + 97 = 100 → 'd'
   - Result: "e F d"

Functions & Roles
- `String.prototype.charCodeAt(i)`: gets the numeric code of the i-th character.
- `String.fromCharCode(code)`: creates a character from a numeric code.
- `% 26`: wraps shifts within the 26-letter alphabet (circular shift).
- `continue`: skips to the next loop iteration (used to preserve spaces).

*/
