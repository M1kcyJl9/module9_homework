/*
Задание 5.

Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

    Заголовок первого input — «номер страницы».
    Заголовок второго input — «лимит».
    Заголовок кнопки — «запрос».
    При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — 
выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — 
выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — 
выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, 
где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input. 
Пример: если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
После получения данных вывести список картинок на экран.

Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса 
(использовать localStorage).
*/

// Просто перемыенные, которые будем использовать
let inputValueOne
let inputValueTwo
let url = 'https://picsum.photos/v2/list?page='
let urlEnd
let cards = ''
let data = localStorage.getItem('savedInfo');
// Ищем ноды для вставки результатов запроса
const resultInputValueOne = document.getElementById('resultInputValueOne')
const resultInputValueTwo = document.getElementById('resultInputValueTwo')
const resultInputValueAll = document.getElementById('resultInputValueAll')
const resultLastImage = document.getElementById('resultLastImage')
const resultLocalStorage = document.getElementById('resultLocalStorage')

butt.onclick = function () {
  inputValueOne = document.getElementById('inputNumberOne').value
  inputValueTwo = document.getElementById('inputNumberTwo').value
  urlEnd = url + inputValueOne + '&limit=' + inputValueTwo
// Создаем promise
const myPromiseOne = new Promise((resolve, reject) => {
  if (!isNaN(inputValueOne) && inputValueOne >= 1 && inputValueOne <= 10) {
    resolve("OK:")
  } else {
    reject("ERROR:")
  }
})
// Выполняем promise
myPromiseOne
  .then((result) => {
    resultInputValueOne.innerHTML = `${result} Номер страницы ${inputValueOne} входит в диапозон от 1 до 10`
  })
  .catch((error) => {
    resultInputValueOne.innerHTML = `${error} Номер страницы ${inputValueOne} вне диапазона от 1 до 10`
  })

// Создаем promise
const myPromiseTwo = new Promise((resolve, reject) => {
  if (!isNaN(inputValueTwo) && inputValueTwo >= 1 && inputValueTwo <= 10) {
    resolve("OK:")
  } else {
    reject("ERROR:")
  }
})
// Выполняем promise
myPromiseTwo
  .then((result) => {
    resultInputValueTwo.innerHTML = `${result} Лимит ${inputValueTwo} входит в диапозон от 1 до 10`
  })
  .catch((error) => {
    resultInputValueTwo.innerHTML = `${error}  ${inputValueTwo} вне диапазона от 1 до 10`
  })

  // Создаем promise
const myPromiseAll = new Promise((resolve, reject) => {
  if (!isNaN(inputValueOne) && inputValueOne >= 1 && inputValueOne <= 10 && 
      !isNaN(inputValueTwo) && inputValueTwo >= 1 && inputValueTwo <= 10) {
    resolve("OK:")
  } else {
    reject("ERROR:")
  }
})
// Выполняем promise
myPromiseAll
  .then((result) => {
    resultInputValueAll.innerHTML = `${result} Оба числа  ${inputValueOne} и ${inputValueTwo} входят в диапозон от 1 до 10`
    getImages()
  })
  .catch((error) => {
    resultInputValueAll.innerHTML = `${error}  Оба числа или одно из чисел ${inputValueOne} или ${inputValueTwo} вне диапазона от 1 до 10`
  })
}

function getImages(data){
  const xhr = new XMLHttpRequest()
  xhr.onload = function() {
    //console.log(`Статус: ${xhr.status}; Результат: ${xhr.response}`)
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
      `
      cards = cards + cardBlock;
    })
    resultLastImage.innerHTML = cards

    var serialObj = JSON.stringify(result)
    localStorage.setItem('savedInfo', (serialObj))
    console.log(serialObj)
    console.log (xhr.response)
  }
  xhr.onerror = function() {
    console.log('Ошибка запроса')
  }
  
  xhr.open("get", urlEnd, true)
  xhr.send()
}

buttLS.onclick = function(){
  const result = JSON.parse(data)
  result.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `
    cards = cards + cardBlock;
  })
  resultLocalStorage.innerHTML = "<p>LocalStorage данные</p>" + cards
}