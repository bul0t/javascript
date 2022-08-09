const button = document.querySelector('.button--start') // Получаем доступ к кнопке
const list = document.querySelector('.list') // При нажатии по кнопке, данные появляются внутри элемента .list

const request = new XMLHttpRequest() // Создаём AJAX запрос
 // URL по которому происходит AJAX запрос

// GET - тип запроса для получения данных
// 'data.json' - URL-строка, по которому происходит AJAX запрос
