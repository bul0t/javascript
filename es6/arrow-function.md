# Arrow function
Стрелочные функции.  
В ES6 у функций появилось триновые особенности:
- default arguments
- arrow funcion
- REST оператор

Обычная функция:

    function greet(name, age) {
      return `Hello ${name}, age ${age}.`
    }
    console.log(greet('Ivan', 23)) // Hello Ivan, age 23.

## default arguments

ES5:

    function greet(name, age) {
      var name = name || 'Ivan'
      return `Hello ${name}, age ${age}.`
    }
    console.log(greet('', 23)) // Hello Ivan, age 23.

ES6:

    function greet(name = 'Ivan', age = 23) {
      return `Hello ${name}, age ${age}.`
    }
    console.log(greet()) // Hello Ivan, age 23.

## arrow funcion
Синтаксис `() => {}`:

  const greet = (name, age) => {
    return `Hello ${name}, age ${age}`
  }

  console.log(greet('Ivan', 23))

Один параметр, скобки не нужны:

    const greet = name => {
      return `Hello ${name}`
    }

    console.log(greet('Ivan'))

Если параметров нет, то скобки обязательны.

Одна строка return и фигурные скобки не нужны:

    const greet = name => `Hello ${name}`

Если из функции возвращается литерал объекта (в одну строку) то обрамляем его скобками:

    const greet = () => ({ a: 1 })

IIFE:

    (() => {})()

## Context
Стрелочные функции нельзя использовать как конструкторы объекта.  
С ними нельзя использовать оператор new.  
В стрелочных функциях нет псевдомассива `arguments`.  
Нельзя применять методы call(), apply(), bind(), методы которые служат для привязки контекста.  
Нельзя изменять значение `this`.

    const user = {
      name: 'Ivan',
      greet: function() {
        console.log(this.name, this)
      }
    }

    user.greet() // Ivan, Object { name: "Ivan", greet: greet() }

Контекст вызова: объект user.

Пишем через setTimeout():

    const user = {
      name: 'Ivan',
      greet: function() {
        setTimeout(function() {
          console.log(this.name, this)
        }, 1000)
      }
    }

    user.greet() // <empty string>, Window

Контекст вызова: объект Window. Раньше это исправлялось чере замыкание:

    greet: function() {
      var _this = this
      setTimeout(function() {
        console.log(_this.name, this)
      }, 1000)
    }

Благодаря стрелочным функциям не нужно писать дополнительный код, потому что у них нет своего this (контекста):

    greet: function() {
      setTimeout(() => {
        console.log(this.name, this)
      }, 1000)
    }

## Итого
Стрелочные функции:
- Не имеют this.
- Не имеют arguments.
- Не могут быть вызваны с new.
- Не имеют super (наследование классов).

Они предназначены для небольшого кода, который не имеет своего "контекста", выполняясь в текущем.
