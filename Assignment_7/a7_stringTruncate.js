/*Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice Output: Ice
Input:Icecream Output:Icec */

string_truncate = function(str) {
    if (str.length > 4) {
      return str.substring(0, 4);
    } else {
      return str;
    }
  };

console.log(string_truncate("Ice"));

console.log(string_truncate("Icecream"));