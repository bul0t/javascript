// Функция вывода элементов
function insertElement(data) {
    list.innerHTML = ''

    // Выводим товары на страницу в цикле
    data.forEach(elem => {
        // Если фото отсутствует, то добавляем заглушку
        if (!elem.Image) elem.Image = "https://avtoalfa.com/img/icons/no_photo.svg"

        // Шаблон одиночного элемента с заполнением
        const listElement = `
            <div class="list__element">
                <div class="list__img">
                    <img src="${elem.Image}" width="204" height="136" />
                </div>
                <div class="list__description">
                    <div class="list__name">${elem.Name}</div>
                    <div class="list__manufacturer">${elem.Manufacturer}</div>
                    <div class="list__articul">${elem.Articul}</div>
                </div>
                <div class="list__cart">
                    <div class="list__price">${elem.Price}</div>
                    <div class="list__your-price">Ваша цена</div>
                    <div class="list__cart-wrap">
                        <div class="list__stock">
                            <div>На складе:</div>
                            <div>${elem.Stock} ${elem.unit}.</div>
                        </div>
                        <div class="list__form">
                            <div class="list__count">
                                <button class="">-</button>
                                <input type="text" value="1" />
                                <button>+</button>
                            </div>
                            <button>В корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        list.insertAdjacentHTML('beforeend', listElement)
    })
}

const buttonAZ = document.querySelector('.button--az')
const buttonZA = document.querySelector('.button--za')
const buttonPriceA = document.querySelector('.button--price-a')
const buttonPriceZ = document.querySelector('.button--price-z')
const buttonShow10 = document.querySelector('.button--show-10')
const buttonShow30 = document.querySelector('.button--show-30')
const buttonShowAll = document.querySelector('.button--show-all')

const list = document.querySelector('.list') // Элемент страницы куда будем выводить данные, полученные через AJAX

const request = new XMLHttpRequest() // Создаём AJAX запрос
request.open('GET', 'data.json') // Открываем AJAX-запрос
// GET - тип запроса для получения данных
// 'data.json' - URL-строка (API, endpoint), по которому происходит AJAX запрос
// const data = request.send() // Отправляем AJAX-запрос по эндпоинту (data.json), поместив результат в переменную

// Но так как формирование ответа может занянуться, создаём асинхронное поведение
// Регистрируем колбэк функцию для объекта request, которая будет вызываться по событию load, когда json-файл будет загружен
request.send() // Отправляем запрос, который будет извлекать данные в фоновом режиме и когда данные будут загружены, возникнет событие load

request.addEventListener('load', function() {
    // console.log(this) // Получаем ответ от сервереа в виде объекта
    // console.log(this.responseText) // Свойство текста ответа, в консоли получим JSON-данные (строка текста)
    let data = JSON.parse(this.responseText) // Преобразовываем JSON-данные в JavaScript-объект
    // console.log(data) // Выводим массив объектов

    insertElement(data)

    // Сортировка по названию от А до Я
    buttonAZ.addEventListener('click', function () {
        data.sort(function compare(a, b) {
            if (a.Name < b.Name)
                return -1;
            if (a.Name > b.Name)
                return 1;
            return 0;
        })
        insertElement(data)
    })

    // Сортировка по названию от Я до А
    buttonZA.addEventListener('click', function () {
        data.sort(function compare(a, b) {
            if (a.Name < b.Name)
                return 1;
            if (a.Name > b.Name)
                return -1;
            return 0;
        })

        insertElement(data)
    })

    // Сортировка по цене от наименьшего
    buttonPriceA.addEventListener('click', function () {
        data.sort(function(a, b){
            return a.Price - b.Price
        })

        insertElement(data)
    })

    // Сортировка по цене от наибольшего
    buttonPriceZ.addEventListener('click', function () {
        data.sort(function(a, b){
            return b.Price - a.Price
        })

        insertElement(data)
    })

    // Показать 10
    buttonShow10.addEventListener('click', function () {
        const items = data.slice(0, 10)

        insertElement(items)
    })

    // Показать 30
    buttonShow30.addEventListener('click', function () {
        const items = data.slice(0, 30)

        insertElement(items)
    })

    // Показать все
    buttonShowAll.addEventListener('click', function () {
        insertElement(data)
    })

    console.log(data)
})
