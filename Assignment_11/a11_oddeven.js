/*Write a JavaScript program to take an array as input from the user and calculate
the sum of numbers in odd places and the sum of numbers at even places.
a) Print the difference between the two sums
b) Print the number of elements in odd places
c) Print the number of elements in even places
d) Print the average of all elements in the array
e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
Places */

function calculator(arr){
    let even=0; odd=0; evenCount=0, oddCount=0;
    for(let i=0;i<arr.length;i++){
         if(i%2==0){
            even+=arr[i];
            evenCount++;
         }else{
            odd+=arr[i];
            oddCount++;
         }
    }
    console.log("Sum of numbers at odd places: " + odd);
    console.log("Sum of numbers at even places: " + even);
    console.log("Difference is "+ (even - odd));
    console.log("Odd elements: " + oddCount);
    console.log("Even elements: "+ evenCount);
    console.log("Average is: " +((odd+even)/2));
    console.log("GCD : " + findGCD(even, odd));
}

function findGCD(x,y){
    while(y) {
        var t = y;
        y = x % y;
        x = t;
      }
      return x;
}

calculator([11,22,33,44,55]);