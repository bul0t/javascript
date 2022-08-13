# AJAX (XMLHttpRequest)
Разбираемсяк как делать AJAX запросы на сервер.

В JavaScript сушествует много способов создания AJAX-вызовов.
- XMLHttpRequest (самый старый и первый способ)

## XMLHttpRequest

    const request = new XMLHttpRequest() // Создаём AJAX запрос
    request.open('GET', 'data.json')     // Открываем AJAX-запрос
    request.send() // Отправляем запрос

    request.addEventListener('load', function() {
        const data = JSON.parse(this.responseText) // Преобразовываем JSON-данные в JavaScript-объект
    }

В качестве URL-строки можно использовать локальный файл или внешний API.

Один из множества сервисов по предоставлению внешних API: https://github.com/public-apis/public-apis:
- Auth - требуется ли аутентификация
- HTTPS - используется ли безопасный протокол HTTPS
- CORS - можно ли делиться этими ресурсами

## Деструктуризация `data`
Если вы запрашиваете у сервера один элемент (объект) и он помещен в массив, то для обращения к этому объекту, минуя массив можно написать: 

    const data = JSON.parse(this.responseText)[0]
    const [data] = JSON.parse(this.responseText) // аналог первой строки, через декструктуризацию

## Разное
- endpoint - URL по которому делается AJAX-запрос

## Пример
Пример кода AJAX через XMLHttpRequest, с комментариями. Подключаемся не к API, а к локальному JSON файлу:

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
    })

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
