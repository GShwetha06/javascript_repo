/*Write a regular expression that matches only a prime number.
Numbers will be presented as strings.
Example
“7” ➞ true
“134” ➞ false */

function isPrime(n) {
    return n.match(/^1?$|^(11+?)\1+$/g);
}

console.log(isPrime("7"))