function solution(n_str) {
  return parseInt(n_str);
}

console.log(solution("10")); // 10
console.log(solution("8542")); // 8542

/* Step-by-step Breakdown:

1) Function Declaration
   - `solution(n_str)` receives a string composed only of digits.

2) String → Integer Conversion
   - Use `parseInt(n_str, 10)` to convert the string to a base-10 integer.
   - `10` is the radix (numeral system base), meaning decimal.

3) About parseInt():
   - Built-in JavaScript function that converts a string to an integer.
   - Reads the string from left to right, parsing as many numeric characters as possible.
   - Syntax:
       parseInt(string, radix)
         - string: The string to convert.
         - radix: The base (e.g., 10 for decimal).

*/