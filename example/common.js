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

console.log(arrName)
