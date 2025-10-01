function solution(num, k) {

    const str    = String(num);
    const target = String(k);

    const index  = str.indexOf(target);

    return index === -1 ? -1 : index + 1;
}

console.log(solution(29183, 1)); // 3 (1 is at the third position)
console.log(solution(232443, 4)); // 4 (4 first appears at the fourth position)
console.log(solution(123456, 7)); // -1 (7 is not found)


/* Step-by-step Breakdown:

1. Converts the number num to a string and stores it in str.
2. Converts the number k to a string and stores it in target.
3. Finds the index of the first occurrence of target in the string str. Returns -1 if not found.
4. If index is -1, returns -1; otherwise, returns index + 1 (since position is 1-based, not 0-based).

Method of " indexOf() ""
 - The indexOf() method returns the index of the first occurrence of a specified value in a string (or array).
If the value is not found, it returns -1.
The index starts at 0.
Only the position of the first match is returned.
It is case-sensitive.

- indexOf(searchValue, fromIndex) 
  fromIndex: specifies the position om the string to start the search from  

*/