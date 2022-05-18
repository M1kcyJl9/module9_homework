const xhr = new XMLHttpRequest();

xhr.onload = function() {
  console.log(`Статус: ${xhr.status}; Результат: ${xhr.response}`)
};

xhr.onerror = function() {
  console.log('Ошибка запроса');
};

xhr.open("get", "https://picsum.photos/v2/list", true);
xhr.send();
