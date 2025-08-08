function solution(order){

    let total = 0;

    for( const item of order ){
        if( item === "anything" ){
            total += 4500;
        } else if ( item.includes("cafelatte")){
            total += 5000;
        } else if ( item.includes("americano")){
            total += 4500;
        }
    }
    return total;
}

/* Step-by-step Breakdown:

1. Initialize a variable `total` with the value 0.  
   This will hold the total cost of all ordered drinks.

2. Loop through each element `item` in the `order` array
   using a `for...of` loop.

3. If the current `item` is exactly the string `"anything"`,
   it means the customer wants a "cold americano" by default.
   Add 4500 to `total`.

4. Else if the current `item` contains the substring `"cafelatte"`,
   it means the customer ordered some form of cafe latte
   (hot or cold). Add 5000 to `total`.

5. Else if the current `item` contains the substring `"americano"`,
   it means the customer ordered some form of americano
   (hot or cold). Add 4500 to `total`.

6. After the loop finishes, return the value of `total`
   as the final amount to be paid.

Method: includes()
- The `includes()` method checks if a string contains
  a specified substring.
- Returns `true` if found, otherwise `false`.
- It is case-sensitive.
- Syntax: `string.includes(searchString, position)`
  - `searchString`: the substring to search for.
  - `position` (optional): the index to start searching from.

*/

function solution(order) {
    
    let latte = [];
    let americano = [];

    for (let i = 0; i < order.length; i++) {
        if (order[i].includes('latte')) {
            latte.push(order[i]);
        } else {
            americano.push(order[i]);
        }
    }

    const result = latte.length * 5000 + americano.length * 4500;
    return result;
}
