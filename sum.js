//Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000
function sum(n){
    let sum = 0;
    for (let x = 0; x < n; x++)
    {
        if (x % 3 === 0 || x % 5 === 0)
        {
        sum += x;
        }
    }
    console.log(sum);
}

sum(1000);

