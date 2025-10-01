function solution(s) {
  // s is a string
  return Number(s);
}

console.log(solution("1234"));  // 1234
console.log(solution("-1234")); // -1234
console.log(solution("+123"));  // 123

/* Step-by-step Breakdown

1) Input
   - `s` is a string of length 1–5.
   - It may start with an optional sign (`+` or `-`) and otherwise consists of digits.
   - It does not start with "0" (per problem constraints).

2) Conversion
   - `Number(s)` performs numeric conversion (ECMAScript ToNumber).
   - It correctly handles optional leading `+` or `-`.
   - Given the constraints, the result will be a valid finite integer.
   - (If `s` were invalid, `Number(s)` would produce `NaN`, but that cannot happen here.)

*/
