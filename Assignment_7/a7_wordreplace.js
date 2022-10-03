/*Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy” Output: “Boy Hii” */

wordReplacer = function(str){
    let result = str.split(" ");
    
    if(result.length >= 3){
        console.log("words are greater than 2");
    }else{
        console.log(result[1] + " " + result[0]);
    }
}

wordReplacer("Hii Boy");

wordReplacer("Hii Hello Boy");