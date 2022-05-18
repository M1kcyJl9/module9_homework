/*
Задание 2.
Вам дана заготовка и результат, который вы должны получить. 
Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.
*/

// JSON, который мы будем парсить
const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`
// console.log('jsonString', jsonString)

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString)
// console.log('data', data)
const list = data.list
// console.log('list', list)
let arr = []
arr.push(list)


// /* Этап 3. Запись данных в результирующий объект */
const result = {
    list: arr
}
console.log('result', result);
// console.log(data);