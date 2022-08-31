# this
В отличие от других языков, значение this в JavaScript, не привязывается статически ни к какому объекту, а зависит только от контекста вызова.

Своства и методы объекта:

    var user = {
      name: 'Max',
      sayHi: function() {
        return 'Hello'
      }
    }

    user.sayBye = function() {
      return 'Bye'
    }

    console.log(user.sayHi()) // Hello
    console.log(user.sayBye()) // Bye

Методы имеют доступ к данным объекта:

    var user = {
      name: 'Max',
      sayHi: function() {
        return 'Hello ' + user.name
      }
    }

    console.log(user.sayHi()) // Hello Max

## Для чего нужен this
- чтобы не дублировался код
- для доступа к текужему объекту из метода
- значением this является объект перед точкой, в контексте которого вызван метод
- использование this гарантирует что функция работает именно с тем объектом, в контексте которого она вызвана
- значение this называется контекстом вызова и если одну и ту же функцию запускать в контексте разных объектов, она будет получать разный this

Пример:

    var user = {
      name: 'Max'
    }

    var user2 = {
      name: 'Peter'
    }

    user.sayHi = function() {
      return 'Hello ' + this.name
    }

    user2.sayHi = function() {
      return 'Hello ' + this.name
    }

    console.log(user.sayHi()) // Hello Max
    console.log(user2.sayHi()) // Hello Peter

Если функция вызывается без заданного контекста, то this становится window (в режиме `use strict` this будет равен undefined):

    function foo() {
      return this
    }

    console.log(foo()) // Window

Это показывает что this в JavaScript не привязан жестко к объекту. Поэтому можно привязать один и тот же метод к разным классам.

## Разное
На практике, this часто используется в обработчиках событий, для того чтобы увидеть элемент на котором вызван данный обработчик.
