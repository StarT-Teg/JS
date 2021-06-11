let arr = [-1,0,3,5,9,12];
let target = 9;

function searchNum (sortedArray, target){

  let start = 0;
  let end = sortedArray.length - 1;

      while (start <= end) {

          let middle = Math.floor((start + end) / 2);

          if (sortedArray[middle] === target) {
              // found
              return middle;
          } else if (sortedArray[middle] < target) {
              // searching to the right
              start = middle + 1;
          } else {
              // searching to the left
              end = middle - 1;
          }
      }
  	// target wasn't found
      return -1;
}

console.log(searchNum(arr, target));
