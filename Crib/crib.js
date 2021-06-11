

// Примитив – значение «примитивного» типа.
// Есть 7 примитивных типов: string, number, boolean, symbol, null, undefined и bigint.
// Все примитивы, кроме null и undefined, предоставляют множество полезных методов.

// Объект - Может хранить множество значений как свойства.
// Объявляется при помощи фигурных скобок {}, например: {name: "Рома", age: 30}.
// В JavaScript есть и другие виды объектов: например, функции тоже являются объектами.

// Чтобы писать числа с большим количеством нулей:
// Используйте краткую форму записи чисел – "e", с указанным количеством нулей. Например: 123e6 это 123 с 6-ю нулями 123000000.
// Отрицательное число после "e" приводит к делению числа на 1 с указанным количеством нулей. Например: 123e-6 это 0.000123 (123 миллионных).
// Для других систем счисления:
//
// Можно записывать числа сразу в шестнадцатеричной (0x), восьмеричной (0o) и бинарной (0b) системах счисления
// parseInt(str, base) преобразует строку в целое число в соответствии с указанной системой счисления: 2 ≤ base ≤ 36.
// num.toString(base) представляет число в строковом виде в указанной системе счисления base.
// Для преобразования значений типа 12pt и 100px в число:
//
// Используйте parseInt/parseFloat для «мягкого» преобразования строки в число, данные функции по порядку считывают число из строки до тех пор пока не возникнет ошибка.
// Для дробей:
//
// Используйте округления Math.floor, Math.ceil, Math.trunc, Math.round или num.toFixed(precision).
// Помните, что при работе с дробями происходит потеря точности.
// Ещё больше математических функций:
//
// Документация по объекту Math. Библиотека маленькая, но содержит всё самое важное.

// Кавычки
// Одинарные и двойные кавычки работают, по сути, одинаково
// Если использовать обратные кавычки, то в такую строку мы сможем вставлять произвольные выражения, обернув их в ${…}:

function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// Многострочные строки можно создавать с помощью одинарных и двойных кавычек, используя так называемый «символ перевода строки», который записывается как \n:

let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // список гостей, состоящий из нескольких строк

// Сравнение строк = str.localeCompare(str2)
// Отрицательное число, если str меньше str2.
// Положительное число, если str больше str2.
// 0, если строки равны.


// Массивы
// Объявление
let arr = [];



// Создали объект user с двумя свойствами name, age
let user = {
  name: "Джон",
  age: 30
};

// Добавили объекту user свойство - функцию (Метод)...
user.sayHi = function() {
  //... и сразу же описали метод (добавили функциональное выражение)
  alert("Привет!");
};

// Запись метода в тело объекта
 // user = {
 //   sayHi() { // то же самое, что и "sayHi: function()"
 //     alert("Привет");
 //   }

// Вызвали метод объекта user
user.sayHi(); // Привет!

// Обращение к свойству объекта
let user2 = {
  name: "Джон",
  age: 30,

  sayHi() {
    // this – это объект «перед точкой», который использовался для вызова метода.
    alert(this.name);
    // Обращение через внешнюю переменную (в которой хранится ссылка на этот объект)
    // Плохой вариант, т.к. при копировании объекта ссылка так же копируется на внешний объект-родитель
    alert(user2.name);
  }

};

user2.sayHi();



// Функция-конструктор

// Функции-конструкторы являются обычными функциями. Но есть два соглашения:
//
// Имя функции-конструктора должно начинаться с большой буквы.
// Функция-конструктор должна вызываться при помощи оператора "new".

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user3 = new User("Вася");

alert(user3.name);
alert(user3.isAdmin);

// Опциональная цепочка '?.'
//Опциональная цепочка ?. останавливает вычисление и возвращает undefined, если часть перед ?. имеет значение undefined или null.

let user = {};
// возвращает undefined, если где-то в цепочке отсутсвуют свойствами
// Не работает, если отсутсвует сам объект!!!
alert( user?.address?.street );
