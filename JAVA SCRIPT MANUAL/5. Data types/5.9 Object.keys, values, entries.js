/*
Для простых объектов доступны следующие методы:

Object.keys(obj) – возвращает массив ключей.
Object.values(obj) – возвращает массив значений.
Object.entries(obj) – возвращает массив пар [ключ, значение].
*/

/*
TASK 1
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.

*/

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": '250'
};

function sumSalaries(salaries) {

  let summary = 0;

  for (var variable of Object.values(salaries)) {

    if (!isNaN(variable)) {
      summary += variable;
    }
  }

  return summary;
}

alert( sumSalaries(salaries) ); // 650

/*
TASK 2
Напишите функцию count(obj), которая возвращает количество свойств объекта:
*/

let user = {
  name: 'John',
  age: 30
};

function count (myObject) {
  Object.keys(myObject).length
}

alert( count(user) );
