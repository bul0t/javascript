# forEach()
Обход элементов массива, и для каждого элемента вызывает указанную функцию. Ничего не возвращает.

## Вычисляем сумму элементов массива

    const arr = [1, 2, 3, 4, 5]

    let sum = 0
    arr.forEach(function(elem, index, array) {
        sum = sum + elem
    })

    console.log(sum)

В данном примере `, index, array` можно не писать.

## Записываем результат в другой массив
Вычисляем квадрат каждого элемента и записываем его в другой массив.

    const arr = [1, 2, 3, 4, 5]
    const arr2 = []

    arr.forEach(function(elem, index, array) {
        elem = elem * elem
        arr2.push(elem)
    })

    console.log(arr2)

## Работаем с JSON
Берём JSON-данные и на их основе создаём массив из свойства элемента JSON-массива.

    const arrJSON = [
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

    const arrName = []

    arrJSON.forEach(function(elem, index, array) {
        arrName.push(elem.name)
    })

    console.log(arrName) // [ "Ivan", "Petr", "Sidor" ]
