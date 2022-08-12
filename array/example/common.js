let arrJSON = [
    {
        "id": 0,
        "name": "Ivan",
        "age": 20,
        "email": "ivan@mail.ru",
        "isCar": true,
        "work": "day",
        "stack": ["html", "css", "js"]
    },
    {
        "id": 1,
        "name": "Petr",
        "age": 21,
        "email": "petr@mail.ru",
        "isCar": false,
        "work": "day",
        "stack": ["html", "css", "php"]
    },
    {
        "id": 2,
        "name": "Sidor",
        "age": 22,
        "email": "sidor@mail.ru",
        "isCar": true,
        "work": "night",
        "stack": ["html", "php", "mysql"]
    },
]

const arr = arrJSON.reduce(function(a, elem) {
    // return a.concat(elem.stack)
    return [...a, ...elem.stack]
}, [])

console.log(arr) // [ "html", "css", "js", "html", "css", "php", "html", "php", "mysql" ]
