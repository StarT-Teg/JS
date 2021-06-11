let l1 = [2,4,3];
let l2 = [5,6,4];

function sumArrays(l1, l2){

var firstNumber = Number(l1.reverse().join(""))
console.log(firstNumber);

var secondNumber = Number(l2.reverse().join(""))
console.log(secondNumber);

return Array.from(String(firstNumber+secondNumber)).reverse()

}

console.log(sumArrays(l1, l2));
