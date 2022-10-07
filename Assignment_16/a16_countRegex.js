/*Create a function that will return an integer number
corresponding to the amount of digits in the given integer num
Examples
num_of_digits(1000) ➞ 4
num_of_digits(12) ➞ 2
num_of_digits(1305981031) ➞ 10 */

function countDigits(num){
    num =num.toString();
    let digitArr = num.match(/\d+/g);
    if(digitArr){
        return digitArr.join("").length;
    }
    return 0;
}


console.log(countDigits(1000));
console.log(countDigits(12));
console.log(countDigits(235324543262536));