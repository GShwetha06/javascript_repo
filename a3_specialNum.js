/*Write a program to find whether a given number is special number or not-
If the sum of the factorial of digits of a number (N) is equal to the
number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 14 */

function specialNumber(number){
  
    let  num, last_digit, sum_Of_Fact = 0;
    num=number;
    while (Math.round(number) != 0)  
    {   
        last_digit = number % 10;   
        let fact=1;    
        for(let i=1; i<=last_digit; i++)  
        {         
            fact=fact*i;  
        }    
        sum_Of_Fact += fact ;   
        number = number / 10;  
    }  

    if(num==sum_Of_Fact)  
    {  
        console.log(num+ " is a special number.");  
    }  
    else  
    {  
        console.log(num+ " is not a special number.");  
    }  
} 


specialNumber(145);