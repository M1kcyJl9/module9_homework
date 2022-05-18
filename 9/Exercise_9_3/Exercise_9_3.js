/*
Задание 3.

Напишите код приложения, интерфейс которого представляет собой input и кнопку. 
В input можно ввести любое число. При клике на кнопку происходит следующее:
Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR 
по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
*/

let inputValue
let url = 'https://picsum.photos/v2/list?limit='
let urlEnd
let cards = ''
// Ищем ноду для вставки результата запроса
const resultData = document.getElementById('result-autor-image')
const resultNode = document.getElementById('str')
butt.onclick = function() {
  // Ищем кнопку и значение, по нажатии на которую будет запрос
  const inputValue = document.getElementById('inputNumber').value
  if(inputValue < 10 && inputValue > 0) {
    resultNode.innerHTML="Смотри что в консоле. Вы ввели число: "+inputValue
    const xhr = new XMLHttpRequest()
    urlEnd = url + inputValue

xhr.onload = function() {
  console.log(`Статус: ${xhr.status}; Результат: ${xhr.response}`)
  const result = JSON.parse(xhr.response)
  result.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  //console.log (cards)
  resultData.innerHTML = cards
}

xhr.onerror = function() {
  console.log('Ошибка запроса')
}

xhr.open("get", urlEnd, true)
xhr.send()
}
else {
  resultNode.innerHTML="Число вне диапазона от 1 до 10. Вы ввели число: "+inputValue
  resultData.innerHTML = ""
}
}