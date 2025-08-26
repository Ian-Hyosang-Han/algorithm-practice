function solution(myString) {
    let answer = myString.toUpperCase();
    return answer;
}

console.log(solution("aBcDeFg")); // "ABCDEFG"
console.log(solution("AAA"));     // "AAA"


/* Step-by-step Breakdown:

1. toUpperCase()
    - Converts all alphabetic characters in the given string to uppercase
      and returns a NEW string (the original is not mutated).
      Example: "aBcDeFg".toUpperCase() → "ABCDEFG"

2. return
    - Returns the transformed uppercase string.
*/