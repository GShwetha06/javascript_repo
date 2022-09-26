/*Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100). */

function prime(lowerNum, higherNum){

    console.log(`The factorials of the prime numbers between ${lowerNum} and ${higherNum} are:`);

    // looping from lowerNumber to higherNumber
    for (let i = lowerNum; i <= higherNum; i++) {
        let flag = 0;

        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
        console.log(factorial(i));
        }
    } 
}

function factorial(n){
    if(n==0) return 0;
    if(n==1) return 1;

    return n *factorial(n-1);
}

//Provide your inputs here
prime(1, 10);