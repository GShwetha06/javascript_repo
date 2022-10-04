/*Write a JavaScript program to take 2 arrays from the user and check if the
number 4 exists in any of the arrays, or both of the arrays. */

function numChecker(arr1, arr2, num){
  let isFirstPresent = arr1.includes(num);
  let isSecondPresent = arr2.includes(num);

  if(isFirstPresent && isSecondPresent){
    console.log("Number : " + num + " is present in both the arrays");
  }else if(isFirstPresent){
    console.log("Number : " + num + " is present in array 1");
  }else if(isSecondPresent){
    console.log("Number : " + num + " is present in array 2");
  }else{
    console.log("Number : " + num + " is not present in both the arrays");
  }
}

numChecker([1,2,3,4],[4,5,6,7,8], 4);



