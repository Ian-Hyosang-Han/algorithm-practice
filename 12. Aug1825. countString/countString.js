function solution( myString, pat ){

    let answer = 0;
    const m = pat.length;

    for( let i = 0; i + m <= myString.length; i++ ){
        if( myString.slice( i, i + m ) === pat) answer++;
    }

    return answer;

}

solution("banana", "ana") // count 2
solution("aaaa", "aa")   // count 3



/* Step-by-step Breakdown:

1. Initialize a counter
    - We will count how many times pat appears in myString (including overlaps).
      Example: for "aaaa" and "aa", the expected count is 3.

2. Cache the pattern length
    - Store pat.length in a variable to avoid recomputing it on every loop.

3. Slide a window over myString
    - For i from 0 up to (myString.length - m), take the substring of length m
      starting at i. This allows overlapping matches.
      Loop condition: i + m <= myString.length

4. Compare the window with pat
    - If myString.slice(i, i + m) === pat, increment the counter.
    - The slice() method creates a new substring on each iteration.

    5. Return the counter
    - After scanning all positions, return the total count.
*/