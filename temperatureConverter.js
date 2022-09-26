/*Write a JavaScript program to convert temperatures to and from Celsius,
Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */

function convertCelsiusToFahrenheit(celsius) 
{
  let fahrenheit = celsius * 9 / 5 + 32;
    console.log( celsius+ '=' + fahrenheit );
}

function convertFahrenheitToCelcius(fahrenheit) 
{
  let celsius = (fahrenheit - 32) * 5 / 9;
    console.log( fahrenheit + '=' + celsius);
} 
convertCelsiusToFahrenheit(60);
convertFahrenheitToCelcius(45);

