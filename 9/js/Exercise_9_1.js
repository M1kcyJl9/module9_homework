/*
Задание 1.
Вам дана заготовка и результат, который вы должны получить. 
Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
*/

/* Этап 1. Подготовка данных */
// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`
/* Этап 2. Получение данных */
// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml")

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector('list')
const studentNodes = listNode.querySelectorAll('student')

const nameNodes = xmlDOM.querySelectorAll('name')
const firstNodes = xmlDOM.querySelectorAll('first')
const secondNodes = xmlDOM.querySelectorAll('second')
const ageNodes = xmlDOM.querySelectorAll('age')
const profNodes = xmlDOM.querySelectorAll('prof')

// Создание, перебор и наполнение массива
let arrStudent = [];
studentNodes.forEach(student => {
const nameNodes = xmlDOM.querySelector('name')
const firstNodes = xmlDOM.querySelector('first')
const secondNodes = xmlDOM.querySelector('second')
const ageNodes = xmlDOM.querySelector('age')
const profNodes = xmlDOM.querySelector('prof')
const langAttr = nameNodes.getAttribute('lang')

  arrStudent.push ({
    name: firstNodes.textContent + " " + secondNodes.textContent,
    age: ageNodes.textContent,
    prof: profNodes.textContent,
    lang: langAttr
  })
});

const jsObject = {
  list: arrStudent
}

console.log(jsObject)

// Получение значений каждого повторяющегося DOM-нода
const studentOne = studentNodes[0]
const studentTwo = studentNodes[1]
const firstNameStudentOne = firstNodes[0]
const secondtNameStudentOne = secondNodes[0]
// console.log (firstNameStudentOne.textContent, secondtNameStudentOne.textContent)

const firstNameStudentTwo = firstNodes[1]
const secondtNameStudentTwo = secondNodes[1]
// console.log (firstNameStudentTwo.textContent, secondtNameStudentTwo.textContent)

const ageStudentOne = ageNodes[0]
const ageStudentTwo = ageNodes[1]
// console.log (Number (ageStudentOne.textContent), Number (ageStudentTwo.textContent))

const profStudentOne = profNodes[0]
const profStudentTwo = profNodes[1]
// console.log (profStudentOne.textContent, profStudentTwo.textContent)

// Получение данных из атрибутов
const langAttrStudentOne = nameNodes[0].getAttribute('lang')
const langAttrStudentTwo = nameNodes[1].getAttribute('lang')

/* Этап 3. Запись данных в результирующий объект */
const result = {
    list: [
        {name: `${firstNameStudentOne.textContent} ${secondtNameStudentOne.textContent}`, 
        age: Number (ageStudentOne.textContent),
        prof: profStudentOne.textContent,
        lang: langAttrStudentOne,},

        {name: `${firstNameStudentTwo.textContent} ${secondtNameStudentTwo.textContent}`, 
        age: Number (ageStudentTwo.textContent),
        prof: profStudentTwo.textContent,
        lang: langAttrStudentTwo,}
    ]
}
console.log('Вот что в результате получилось:', result);