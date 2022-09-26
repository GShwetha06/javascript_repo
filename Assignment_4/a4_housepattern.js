/*Create a function that takes a number (step) as an argument and returns the
number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Take input from the user in the function parameter and return the output
using the return statement.
examples-
matchHouses(1) ➞ 6
matchHouses(4) ➞ 21
matchHouses(87) ➞ 436 */

const matchHouses = (n) => {
    if (n === 0) {
        return "No matchsticks for creating house"
    } 
    else if (n < 0 || typeof n !== "number") {
        return "Enter a valid positive number"
    } 
    else {
        let a;
        a = (5 * n) + 1;
        return a;
    }
    
  };
  
  console.log(matchHouses(1));
