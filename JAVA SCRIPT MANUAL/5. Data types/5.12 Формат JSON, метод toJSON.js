// JSON.stringify(value,[replacer, space]) для преобразования объектов в JSON.

// value - Значение для кодирования.
// replacer - Массив свойств для кодирования или функция соответствия function(key, value).
// space - Дополнительное пространство (отступы), используемое для форматирования.

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // мы получили строку!

alert(json);
/* выведет объект в формате JSON:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

// JSON.parse(str, [reviver]) для преобразования JSON обратно в объект

// str - JSON для преобразования в объект.
// reviver - Необязательная функция, которая будет вызываться для каждой пары (ключ, значение) и может преобразовывать значение.
