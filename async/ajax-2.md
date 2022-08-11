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
