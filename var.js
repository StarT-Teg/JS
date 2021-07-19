let user = {
  name: 'John',
  age: 30,
  symbol: Symbol("symbol")
};

function count (myObject) {
  return Object.keys(myObject).length;
}

alert( count(user) );
