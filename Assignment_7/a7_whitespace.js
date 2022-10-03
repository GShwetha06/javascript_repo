/*Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy” Output: “HiiBoy” */

whitespaceRemover = function(str){
   return str.replaceAll(" ","");
}

console.log(whitespaceRemover("This is the sentence to remove whitespaces"));