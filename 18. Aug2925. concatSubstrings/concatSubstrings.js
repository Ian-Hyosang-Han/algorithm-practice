function solution(my_strings, parts) {
    let result = "";
    for (let i = 0; i < my_strings.length; i++) {
      const [s, e] = parts[i];           // inclusive indices
      result += my_strings[i].slice(s, e + 1); // slice's end is exclusive → e+1
    }
    return result;
  }
  
  console.log(solution(["progressive", "hamburger", "hammer", "ahocorasick"],[[0, 4], [1, 2], [3, 5], [7, 7]])); // "programmers"

/* Step-by-step Breakdown:

1) Initialize an accumulator
   - Start an empty string to collect the concatenated result.
     let result = "";

2) Iterate over all indices
   - Increase i from 0 to my_strings.length - 1 to process each string and its corresponding range.

3) Destructure the slice range
   - parts[i] is [s, e] (an inclusive range).
     const [s, e] = parts[i];

4) Take the substring for this item
   - String.prototype.slice(start, end) is end-exclusive.
     To include index e, pass e + 1 as the end.
     my_strings[i].slice(s, e + 1)

5) Append to the accumulator
   - Concatenate the extracted substring onto result.
     result += (extracted substring);

6) Return the final string
   - After processing all items, return the completed result.

Example (from the prompt):
- "progressive"[0..4]  → "progr"
- "hamburger"[1..2]    → "am"
- "hammer"[3..5]       → "mer"
- "ahocorasick"[7..7]  → "s"
Concatenate: "progr" + "am" + "mer" + "s" = "programmers"
*/