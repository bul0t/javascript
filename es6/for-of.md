# for ... of
`for ... of` - цикл стандарта ES6, перебирающий значения элементов итерируемой сущности:

    const arr = ['ivan', 'petr', 'sidor']

    for(let el of arr) {
      console.log(el) // 'ivan', 'petr', 'sidor'
    }

`for ... in` - цикл стандарта ES5 перебирающий ключи элементов итерируемой сущности:

    const arr = ['ivan', 'petr', 'sidor']

    for(let key in arr) {
      console.log(arr[key]) // 'ivan', 'petr', 'sidor'
    }

## Разное
С помощью `for ... of` можно также итерировать структуры `Set`, `Map`.
