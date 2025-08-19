function solution(myString) {
  return myString.toLowerCase().replace(/a/g, "A"); // (= replaceAll('a','A'))
}

solution("abstract algebra"); // "AbstrAct AlgebrA"
solution("PrOgRaMmErS"); // "progrAmmers"


/* Step-by-step Breakdown:

1. toLowerCase()
    - Convert the entire input string to lowercase so that any uppercase letters
      become lowercase.
      Example: "PrOgRaMmErS" → "programmers"

2. replaceAll('a', 'A')     // or: replace(/a/g, 'A')
    - Replace every lowercase 'a' with uppercase 'A'.
      Example: "programmers" → "progrAmmers"

*/