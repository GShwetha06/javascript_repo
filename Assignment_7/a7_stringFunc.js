/*Given a String S, achieve following tasks
a) Convert the String into upper case.
b) Convert only the first character to uppercase.
c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string */

function upperCase(str){
    return str.toUpperCase();
}

function firstCharUppercase(str){
   return str.charAt(0).toUpperCase() +  str.slice(1);
}

function lowercase(str){
    return str.toLowerCase();
}

function sliceString(str){
    let s1 =str.slice(0,str.length/2);
    let s2 = str.slice(str.length/2);
    return s2 + " " +s1;
}

function toCount(str, char){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i].includes(char))
        count++;
    }
    return count;
}

function reverse(str){
    return str.split("").reverse().join("");
}

console.log(upperCase('abcd'));
console.log(firstCharUppercase('abcd'));
console.log(lowercase('ABCD'));
console.log(sliceString('This is to slice a string and swap them'));
console.log(toCount("To count the no. of o's in a given sentence",'o'));
console.log(reverse('This is to reverse a string'));
