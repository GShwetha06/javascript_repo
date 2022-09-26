//Write a program to find the factorial of a number.

function factorial(n){
    if(n==0) return 0;
    if(n==1) return 1;

    return n *factorial(n-1);
}


//let factorialNum = 0;
//let factorialNum = -1;
let factorialNum = 5;

if(factorialNum < 0){
    console.log("Please enter a positive number")
}

console.log("The factorial of a given number " +  factorialNum + " is " + factorial(factorialNum));