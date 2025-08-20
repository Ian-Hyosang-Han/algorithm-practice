function solution(strArr) {
    return strArr.map((item, index)=> index % 2 === 0 ? item.toLowerCase() : item.toUpperCase());
}

solution(["AAA","BBB","CCC","DDD"]); // ["aaa","BBB","ccc","DDD"]
solution(["aBc","AbC"]);             // ["abc","ABC"]

/* Step-by-step Breakdown:

1. map((item, index) => …)
    - Runs the callback for each element and returns a NEW array of the results
      (the original array is not mutated).
      Example: ["A","b"].map(x => x.toUpperCase()) → ["A","B"]

2. index % 2 === 0
    - Checks whether the index is even (0, 2, 4, …). Even → true, odd → false.

3. item.toLowerCase()
    - When the index is even: convert the string to lowercase.
      Example: "ABC" → "abc"

4. item.toUpperCase()
    - When the index is odd: convert the string to uppercase.
      Example: "Abc" → "ABC"

*/