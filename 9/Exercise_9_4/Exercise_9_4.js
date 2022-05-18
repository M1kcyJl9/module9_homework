/*
Задание 4.

Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. 
В input можно ввести любое число. При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — 
выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, 
где первое число — ширина картинки, второе — высота.
Пример: если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
После получения данных вывести ниже картинку на экран.
*/

// Ищем кнопку и значение, по нажатии на которую будет запрос
let inputValueOne
let inputValueTwo
let url = 'https://picsum.photos/'
let urlEnd
let cards = ''
// Ищем ноды для вставки результатов запроса
const resultData = document.getElementById('result-autor-image')
const resultNode = document.getElementById('str')

  butt.onclick = function() {
// Ищем кнопку и значение, по нажатии на которую будет запрос
inputValueOne = document.getElementById('inputNumberOne').value
inputValueTwo = document.getElementById('inputNumberTwo').value
// Делаем из строки число, если это возможно
inputValueOne = Number(inputValueOne)
inputValueTwo = Number(inputValueTwo)
urlEnd = url + inputValueOne + '/' + inputValueTwo

if(typeof(inputValueOne) === 'number' && !isNaN(inputValueOne) && inputValueOne >= 100 && inputValueTwo >= 100 && 
inputValueOne <= 300 && inputValueTwo <= 300) {
fetch(`${urlEnd}`)
.then((response) => {
  // Объект ответа на запрос
  console.log(response)
  const resultImage = response
    const cardBlock = `
      <div class="card">
        <img
          src="${resultImage.url}"
          class="card-image" width="${inputValueOne}" height="${inputValueTwo}"/>
        <p>${resultImage.type}</p>
      </div>
    `;
    cards = cards + cardBlock;
  resultData.innerHTML = cards
  return response
})
}else{
  console.log (`Одно из чисел вне диапазона от 100 до 300`)
  resultNode.innerHTML = `ERROR: Одно из чисел вне диапазона от 100 до 300`
}
}