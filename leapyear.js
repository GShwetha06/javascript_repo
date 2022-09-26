//Write a program to find whether a given year is a leap year or not.

function leapyearCheck(year)
{
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapyearCheck(2020));
console.log(leapyearCheck(2023));