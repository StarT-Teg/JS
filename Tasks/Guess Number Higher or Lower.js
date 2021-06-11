/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns 3 possible results:

-1: The number I picked is lower than your guess (i.e. pick < num).
1: The number I picked is higher than your guess (i.e. pick > num).
0: The number I picked is equal to your guess (i.e. pick == num).
Return the number that I picked.
*/

let maxRange = Math.floor(Math.random() * (11-5)) + 5;
console.log("MAX RANGE = " + maxRange);

let pickedNumber = Math.floor(Math.random() * maxRange) + 1;
console.log("PICKED NUMBER = " + pickedNumber);

console.log("SEARCH RESULT = " + guessNumber(maxRange));

function guessNumber (maxRange){

  let start = 1;
  let end = maxRange + 1;

  while (start <= end) {

    let middle = Math.floor((start + end) / 2);

        console.log("RANGE START = " + start + ", RANGE END = " + end + ", MIDDLE = " + middle);

    if (guess(middle) === 1) {
      start = middle;
    }
    else if (guess(middle) === -1) {
      end = middle;
    }
    else {
      return middle;
    }

  }
}

function guess (guessNumber){

if (guessNumber === pickedNumber) {
  return 0;
}
else if (pickedNumber > guessNumber) {
  return 1;
}
else if (pickedNumber < guessNumber){
  return -1;
}
else {
  console.log("ERROR ON GUESS");
}
}
