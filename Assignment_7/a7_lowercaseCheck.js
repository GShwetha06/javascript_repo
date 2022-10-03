/*Write a Javascript function to test whether the first character of a string
is lowercase. */

function isLowercase(str){
    regexp = /^[a-z]/;
   if (regexp.test(str))
    {
      console.log("String's first character is lowercase");
    } 
    else
    {
      console.log("String's first character is not lowercase");
    }
}
isLowercase('abcd');
isLowercase('Abcd');