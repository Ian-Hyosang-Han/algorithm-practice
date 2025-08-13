function solution (myString){

    return myString.split("x").filter(str => str !== "").sort();

}

console.log(solution("axbxcxdx"));       // ["a","b","c","d"]
console.log(solution("dxccxbbbxaaaa")); // ["aaaa","bbb","cc","d"]

/* Step-by-step Breakdown:

1. split("x")
    - Splits the given string into an array using "x" as the delimiter.
      Example: "axbxc" → ["a", "b", "c"]

2. filter(str => str !== "")
    - Removes empty strings from the array.
      This is necessary because consecutive "x" characters or an "x" at the start/end of the string can produce empty elements.

3. sort()
    - Sorts the array in alphabetical (lexicographical) order.

*/