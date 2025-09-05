function solution (num_list){

    let odd  = "";
    let even = "";

    for(const n of num_list) {
        if(n % 2 ===1 ) odd += n;
        else            even += n;
    }

    return Number(odd) + Number(even);

}

console.log(solution([3, 4, 5, 2, 1])); // 393  (odd: "351", even: "42")
console.log(solution([5, 7, 8, 3]));    // 581  (odd: "573", even: "8")


/* Step-by-step Breakdown:

1) Initialize accumulator strings
   - Start two empty strings to collect digits:
     `odd` for odd numbers, `even` for even numbers.
     let odd  = "";
     let even = "";

2) Iterate over the array
   - Use `for...of` to process each integer `n` in `num_list` from left to right.

3) Branch by parity and concatenate
   - If `n % 2 === 1` (odd), append to `odd`:   odd += n;
   - Otherwise (even), append to `even`:        even += n;

4) Convert concatenated strings to numbers
   - Turn the built strings into numbers:
     Number(odd), Number(even)

5) Return the sum
   - Add the two numbers and return the result:
     return Number(odd) + Number(even);

*/