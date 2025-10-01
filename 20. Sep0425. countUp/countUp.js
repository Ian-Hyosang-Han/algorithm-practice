function solution(start_num, end_num) {
  let result = [];
  for (let i = start_num; i <= end_num; i++) {
    result.push(i);
  }
  return result;
}

console.log(solution(3, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]

/* Step-by-step Breakdown:

1) Initialize the result array
   - Prepare an empty array to collect numbers in order.
     let result = [];

2) Iterate from start_num to end_num (inclusive)
   - Increase i from start_num to end_num by 1.
     for (let i = start_num; i <= end_num; i++)

3) Append the current number
   - On each iteration, push i to the end of the array.
     result.push(i);

4) Return the completed array
   - Return the accumulated list of numbers.
     return result;

*/
