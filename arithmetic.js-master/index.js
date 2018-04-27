/* 
   _        _ _   _                    _   _         _     
  /_\  _ __(_) |_| |__  _ __ ___   ___| |_(_) ___   (_)___ 
 //_\\| '__| | __| '_ \| '_ ` _ \ / _ \ __| |/ __|  | / __|
/  _  \ |  | | |_| | | | | | | | |  __/ |_| | (__ _ | \__ \
\_/ \_/_|  |_|\__|_| |_|_| |_| |_|\___|\__|_|\___(_)/ |___/
                                                  |__/ 
                                                  
A simple math library
   
Create the files and the proper import/exports to make all these functions work!
Add has already been completed for you
*/

const add = require('./functions/add');

// Add
console.log(add(2, 3, 4));
console.log(add([1, 2, 3, 4]));
console.log(add([5, 6, 7, 8], 100));

// Subtract
console.log(subtract(5, 2));
console.log(subtract([5, 7, 4], 4));
console.log(subtract(1));

// Multiply
console.log(multiply(10, 4, 5, 9, 20));
console.log(multiply([4, 3, 10, 11]));
console.log(multiply([5, 10, 15, 20, 25], 10));
console.log(multiply());

// Divide
console.log(divide(6, 2));
console.log(divide(1, 3));
console.log(divide([1, 2, 3, 4, 5], 5));