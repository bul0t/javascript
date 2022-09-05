# Объекты
В ES6 было добавлено несколько нововведений для объектов.

    const name = 'Ivan'
    const sex  = 'male'
    const age  = 23

На основе эти переменных создадим объект (ES5):

    const name = 'Ivan'
    const sex  = 'male'
    const age  = 23

    var user = {
      name: name,
      sex: sex,
      age: age
    }

    console.log(user) // Object { name: "Ivan", sex: "male", age: 23 }

## Свойства
Имена свойств объекта совпадают с именами переменных, в ES6 можно записать так:

    const user = {
      name,
      sex,
      age
    }

## Методы
ES5:

    greet: function() {
      
    }

ES6:

    greet() {
      
    }

Пример:

    const user = {
      name,
      sex,
      age,
      greet() {
        console.log(`Hello ${this.name}`)
      }
    }

## Динамические ключи
Динамические ключи для свойств объектов.

    user.name
    user['name']

    let firstName = 'name'
    user[firstName]

В стандарте ES6 появилась возможность создавать динамические ключи для свойств объектов:

    let firstName = 'name'

    let user = {
      [firstName]: 'Ivan'
    }

    console.log(user) // Object { name: "Ivan" }

В user присвоен объект, в котором имя свойства динамическое.

## get/set
Геттер/сеттер. Специальное свойство, внутри объекта работает как метод, а снаружи работает как свойство.

Синтаксис ES5, добавления геттера `Object.defineProperty()`:

    let user = {
      name,
      sex,
      age,
      greet() {
        console.log(`Hello ${this.name}`)
      }
    }

    Object.defineProperty(user, 'password', {
      get: function() {
        return this.name + this.age;
      }
    })

    console.log(user.password) // Ivan23

Синтаксис ES6:

    let user = {
      name,
      sex,
      age,
      greet() {
        console.log(`Hello ${this.name}`)
      },
      get password() {
        return this.name + this.age;
      }
    }

    console.log(user.password) // Ivan23

`user.password` - является методом, даже не смотря на то что при его вызове не используются скобки.

Геттер - это метод возвращающий значение некоего свойства класса, а сеттер то что устанавливает свойство класса.
