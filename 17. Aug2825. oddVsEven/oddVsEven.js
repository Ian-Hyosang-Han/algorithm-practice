function solution ( num_list ){

    let oddSum = 0;
    let evenSum = 0;

    for ( i = 0; i < num_list.length; i++ ) {
        if( i % 2 === 0 ) oddSum += num_list[i];
        else              evenSum += num_list[i];
    }
    
    return Math.max(oddSum, evenSum);
}

/* Step-by-step Breakdown:

1) Initialize accumulators
   - oddSum: sum of elements at 1-based odd positions (1st, 3rd, 5th, …)
   - evenSum: sum of elements at 1-based even positions (2nd, 4th, 6th, …)

2) Iterate over indices
   - Loop i from 0 to num_list.length - 1.

3) Map 0-based index to 1-based parity
   - If i % 2 === 0, it corresponds to a 1-based odd position → add to oddSum.
   - Otherwise, it corresponds to a 1-based even position → add to evenSum.

4) Select the larger sum
   - Use Math.max(oddSum, evenSum) to return the greater of the two.
   - If they’re equal, that value is returned.

5) Return the result
   - Return the computed maximum.
*/