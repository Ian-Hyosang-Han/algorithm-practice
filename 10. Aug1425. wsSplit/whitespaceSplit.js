function solution(my_string) {
  return my_string
    .trim() // 1) remove leading/trailing whitespace
    .split(/\s+/); // 2) split by any run of whitespace
}

// ✅ Examples
console.log(solution("   I   love   you ")); // ["I", "love", "you"]
console.log(solution("I love you")); // ["I", "love", "you"]

/* Step-by-step Breakdown:

1. trim()
    - Removes whitespace from both ends of the string (spaces, tabs, newlines).
      Example: "  I  love   you \n" → "I  love   you"

2. split(/\s+/)
    - Splits the string by one or more whitespace characters (space, tab, newline).
      Example: "I  love   you" → ["I", "love", "you"]

*/