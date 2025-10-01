function solution(arr, divisor) {

    const result = arr.filter(n => n % divisor === 0).sort((a, b) => a - b);

    return result.length ? result : [-1];

}

console.log(solution([5, 9, 7, 10], 5));  // [5, 10]
console.log(solution([2, 36, 1, 3], 1));  // [1, 2, 3, 36]
console.log(solution([3, 2, 6], 10));     // [-1]


/* Step-by-step Breakdown:

1) Filter elements divisible by divisor
   - Use Array.prototype.filter to select only elements from `arr`
     where n % divisor === 0.
   - Example: arr = [5, 9, 7, 10], divisor = 5
     → [5, 10]

2) Sort the filtered elements in ascending order
   - Apply sort((a, b) => a - b) to ensure numerical ascending order
     (default sort is lexicographical, so this step is important).
   - Example: [10, 5] → [5, 10]

3) Handle the case when no elements are divisible
   - Check if result.length is greater than 0.
   - If true: return the sorted array.
   - If false (no elements): return [-1].

4) Return the final array
   - Either the sorted divisible elements,
     or [-1] if none are found.

*/