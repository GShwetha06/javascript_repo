/*Create a function that takes a word and returns true if the word
has two consecutive identical letters.
Examples
doubleLetters("loop") ➞ true
doubleLetters("yummy") ➞ true */

function doubleLetters(text){
    if(text.match(/([a-zA-Z])\1+/g))
        return true;
    else
        return false;
}

console.log(doubleLetters("loop"));
console.log(doubleLetters("yummy"));