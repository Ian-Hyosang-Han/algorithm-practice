function solution( str_list, ex ){

    return str_list
    .filter(item => !item.includes(ex))
    .join('');

}

let str_list1 = ["abc", "def", "ghi"];
let ex1 = "ef";

console.log(solution(str_list1, ex1)); // "abcghi"

let str_list2 = ["abc", "bbc", "cbc"];
let ex2 = "c";
console.log(solution(str_list2, ex2)); // ""

/* Step-by-step Breakdown:

1) Filter: Keep only the strings in `str_list` that do NOT contain `ex`.
   - Uses: item.includes(ex) → true if `ex` is found (case-sensitive).

2) Join: Concatenate the remaining strings with no separator to form the tail string.
   - Uses: array.join('').

3) Return: Output the final concatenated string.

*/