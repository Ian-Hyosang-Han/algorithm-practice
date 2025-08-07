function solution(my_string, letter) {
  return my_string.split(letter).join("");
}

solution("abcdef", "f"); // "abcde"
solution("BCBdbe", "B"); // "Cdbe"

/* Step-by-step Breakdown:

1. Split the original string into an array using the target letter as the delimiter.
   This effectively removes the target letter during the split.
   Example: "abcdef".split("f") → ["abcde", ""]
    const str = "apple,banana,orange";
    const arr = str.split(","); // ["apple", "banana", "orange"]

2. Join the resulting array into a single string with no separators,
   removing all occurrences of the target letter.
   Example: ["abcde", ""].join('') → "abcde"
    const arr = ["apple", "banana", "orange"];
    const str = arr.join(", "); // "apple, banana, orange"

  if using together
    const result = "applebanana".split("a").join("-");
    "applebanana" → ["", "ppleb", "n", "n", ""] → "-ppleb-n-n-"

*/
