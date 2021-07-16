// Перебор массива объектов

let user = {
  name: "John",
  age: 30
};

// перебор значений
for (let value of Object.values(user)) {
  alert(value); // John, затем 30
}
