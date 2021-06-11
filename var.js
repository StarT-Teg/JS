let lists = [[1,4,5],[1,3,4],[2,6]];

let mergeKLists = function(lists) {

  let unsortedArr = lists.reduce((mergeResult, item) => {
  return mergeResult.concat(item);

  });

  return unsortedArr.sort(compareNumbers)

};

function compareNumbers(a, b) {
return a - b;
}


console.log(mergeKLists(lists));
