/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
*/

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
let target = 3;

function searchMatrix (matrix, target) {

  var m = arr.length,
          n = arr[0].length,
          row = 0,
          col = n - 1;

      if (num < arr[0][0] || num > arr[m - 1][n - 1]) {
          return false;
      }

      while (row <= (n - 1) && col >= 0) {
          if (arr[row][col] < num) {
              row++;
          } else if (arr[row][col] > num) {
              col--;
          } else {
              console.log(row + " " + col);
              return true;
          }
      }
      return false;
}
