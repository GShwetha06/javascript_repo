/*Create a function that takes in a number as a string n and returns
the number without trailing and leading zeros.
● Trailing Zeros are the zeros after a decimal point which don't
affect the value (e.g. the last three zeros in 3.4000 and
3.04000).
● Leading Zeros are the zeros before a whole number which
don't affect the value (e.g. the first three zeros in 000234 and
000230).
removeLeadingTrailing("230.000") ➞ "230"
removeLeadingTrailing("00402") ➞ "402" */

function removeLeadingTrailing(num){
    return num.replace(/^0+|.0+$/g, "");
}

console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00402"));