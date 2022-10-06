/* Write a JavaScript program to get an array from the user and return the:
a) Sum of all elements in the array using reduce()
b) Average of all elements in the array using reduce()*/

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

console.log(sum);
console.log(sum/(numbers.length));