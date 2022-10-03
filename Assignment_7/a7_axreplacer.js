/*Input a String S with a word, and replace character “a” with “x” and
display the result -
Input: “apple” Output: “xpple”*/

function aTox(word){
    if(!word.includes('a')){
       console.log("Word "+ word + " does not contain 'a'");
    }
    return word.replace('a','x');
}

aTox('apple');

aTox('xpple');