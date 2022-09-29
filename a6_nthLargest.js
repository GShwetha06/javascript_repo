/*Write a javascript function find_largest to return the nth largest numberin an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]
find_largest(3) will return third largest number from the above array -
which is 8. */

function find_largest(array,highest){
    var x = 0,
        y = 0,
        z = 0,
        temp = 0,
        tnum = array.length, 
        flag = false, 
        result = false; 

    while(x < tnum){
        y = x + 1; 
        
        if(y < tnum){
            for(z = y; z < tnum; z++){
                
                if(array[x] < array[z]){
                    temp = array[z];
                    array[z] = array[x];
                    array[x] = temp;
                    flag = true; 
                }else{
                    continue;
                }	
            }					
        }
        
        if(flag){
            flag = false;
        }else{
            x++; 
            if(x === highest){ 
              
                result = true;
            }	
        }
        if(result){
            break;
        }
    }

    return (array[(highest - 1)]);	
}

console.log(find_largest([3,45,6,7,23,5,7,8], 3)); 


