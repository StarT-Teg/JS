// 1. Immutable merge of arrays
// 1.1 Merge using the spread operator

let array1 = [1, 6, 9, 2];
let array2 = [2, 5, 3, 2];

const mergeResult1 = [...array1, ...array2];

console.log (mergeResult1);

// items of the merged arrays are inserted in the same order as the arrays appear inside the literal
//console.log (mergeResult);

// 1.2 Merge using array.concat() method

const mergeResult2 = array1.concat(array2);

const mergeResult3 = [].concat(array1, array2);

console.log (mergeResult2);
console.log (mergeResult3);
