# map()
Возвращает результат своей работы. Возвращает массив.

Пример, берем массив и возвращаем новый из квадратов чисел массива (здесь метод push() не нужен):

    const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // let newArrNumber = []

    const newArrNumber = arrNumber.map(function(elem) {
        return elem = elem * elem
    })

    console.log(newArrNumber) // массив из элементов

Изменяем исходный массив:

    let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    arrNumber = arrNumber.map(function(elem) {
        return elem = elem * elem
    })

    console.log(arrNumber) // Изменённый массив

## map() и JSON
Вырезаем все свойства кроме `id` и `email`, создаём с ними новый массив.

    let arrJSON = [
        {
            "id": 0,
            "name": "Ivan",
            "age": 20,
            "email": "ivan@mail.ru",
            "isCar": true,
            "work": "day"
        },
        {
            "id": 1,
            "name": "Petr",
            "age": 21,
            "email": "petr@mail.ru",
            "isCar": false,
            "work": "day"
        },
        {
            "id": 2,
            "name": "Sidor",
            "age": 22,
            "email": "sidor@mail.ru",
            "isCar": true,
            "work": "night"
        },
    ]

    // let arr = []

    const arr = arrJSON.map(function(elem) {
        return {
            id: elem.id,
            email: elem.id
        }
    })

    console.log(arr)
