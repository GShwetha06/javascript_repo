/* Write a program to find whether a given number is armstrong number or

not-
The Armstrong number is a number that is equal to the sum of cubes of

its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.*/

function Armstrong(number)
	{
		var flag,remainder,addition = 0;

		flag = number;
		while(number > 0)
		{
			remainder = number%10;
			addition = addition + remainder*remainder*remainder;
			number = parseInt(number/10);
		}

		if(addition == flag)
		{
			console.log("The inputed number is Armstrong");
		}
		else
		{
			console.log("The inputed number is not Armstrong");
		}
	}

Armstrong(153);