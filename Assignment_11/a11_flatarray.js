/*3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
array.
Note: Do not use array.flat();
Sample Input:
[ 1, 2, [ 3, 4, 5  ] ]
Output:
[ 1, 2, 3, 4, 5 ] */

function flatArray(arr){
    let flatArray = [].concat.apply([], arr);
    console.log(flatArray);
}

flatArray([ 1, 2, [ 3, 4, 5  ] ])