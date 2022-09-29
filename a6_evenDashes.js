/*Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8. */

function computeDash(num){
    let str = num.toString();
    let result = [str[0]];
      
    for(let x=1; x<str.length; x++)
      {
        if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
         {
          result.push('-', str[x]);
         }
        else
         {
          result.push(str[x]);
         }
      }
    console.log(result.join(''));
}

computeDash(025468);