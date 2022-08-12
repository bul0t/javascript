# filter()
Возвращает массив, отфильтровав исходный. Возвращает массив, который содержит в себе подмножество элементов исходного массива.  
`filter()` функция предикат возвращает `true` или `false`.

Отфильтрует массив и создаст новый отфильтрованный:

    const arrNumber = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const newArrNumber = arrNumber.filter(function(elem) {
        return elem % 2 === 0 // вывести все четные и четные отрицательные
        // return (elem % 2 === 0) && (elem >= 0)  // вывести все четные, без отрицательных
        // return elem % 2 === 1 // вывести все нечетные, без отрицательных
        // return elem % 2 !== 0 // // вывести все нечетные и нечетные отрцательные
    })

    console.log(newArrNumber)

## filter() и JSON
Выводим пользователей у которых есть авто:

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

    const arr = arrJSON.filter(function(elem) {
        // return elem.isCar === true // вывести только тех пользователей у которых есть автомобиль
        // return elem.isCar
        return elem.age > 20 // возраст больше 20
    })

    console.log(arr)
