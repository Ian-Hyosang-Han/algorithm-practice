function solution(number) {

    let sum = 0;
    let answer = 0;
    
    for (let i = 0; i < number.length; i++) {
      sum += Number(number[i]);
    }
    answer = sum % 9;
    return answer;
  }

console.log(solution("123"));              // 6
console.log(solution("78720646226947352489")); // 2

/* Step-by-step Breakdown:

1) Initialize accumulators
   - sum: running total of all digit characters in the string.
   - answer: will store sum mod 9 at the end.
     let sum = 0;
     let answer = 0;

2) Loop over all characters in `number`
   - for (let i = 0; i < number.length; i++) { … }

3) Convert each character to a number and add
   - Number(number[i]) turns a digit character like '7' into 7.
   - sum += Number(number[i]);

4) Take modulo 9 once at the end
   - answer = sum % 9;
   - By the modulo-9 property, the remainder of the whole integer
     equals the remainder of the sum of its digits.

5) Return the remainder
   - return answer;

*/