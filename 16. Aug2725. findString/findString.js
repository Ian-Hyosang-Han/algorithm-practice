function solution(myString, pat) {
  const a = myString.toLowerCase();
  const b = pat.toLowerCase();
  return a.includes(b) ? 1 : 0;
}

console.log(solution("AbCdEfG", "aBc")); // 1
console.log(solution("aaAA", "aaaaa")); // 0


/* Step-by-step Breakdown:

1. toLowerCase() on both strings
    - Convert both myString and pat to lowercase to make the check case-insensitive.
      Example: "AbCdEfG" → "abcdefg",  "aBc" → "abc"

2. includes(substring)
    - Check whether the lowercased myString contains the lowercased pat
      as a contiguous substring. Returns true if included, otherwise false.
      Example: "abcdefg".includes("abc") → true

3. Ternary operator ( ? : )
    - Convert the boolean to a number: return 1 if true, 0 if false.
*/