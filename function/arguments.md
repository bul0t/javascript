# arguments
Псевдомассив arguments (объект, ключи которого числа). Данный псевдомассив не поддерживает методы массивов.

    function foo() {
      console.log(arguments)        // Arguments { 1, 2, 3 }
      console.log(arguments[0])     // 1
      console.log(arguments.length) // 3
      console.log(typeof arguments) // object
    }
    foo(1, 2, 3)

В JavaScript, любая функция может быть вызвана с произвольным количеством аргументов.  

В языке JavaScript не существует понятия **перегрузка функций** (полиморфизм функций) - создание двух функций с одинаковым именем но разным количеством параметров. Доступ к дополнительным аргументам можно получить через псевдомассив `arguments`.

## Преобразуем псевдомассив в массив

Пример №1:

    function foo() {
      var arr = []
      for (var i = 0; i<arguments.length; i++) {
        arr[i] = arguments[i]
      }
      console.log(arr) // Array(3) [ 1, 2, 3 ]
    }
    foo(1, 2, 3)

Пример №2:

    function foo(separator) {
      var arr = Array.prototype.slice.call(arguments)
      return arr
    }

    console.log(foo(1, 2, 3)) // Array(3) [ 1, 2, 3 ]

Пример №3:

    function foo(separator) {
      // через спред оператор
      var arr = [...arguments]
      return arr
    }

console.log(foo(1, 2, 3)) // Array(3) [ 1, 2, 3 ]


## Неограниченное количество аргументов
Функция принимает неограниченное количество аргументов и возвращает результат в виде строки, которая является результатом конкатенации аргументов.

    function foo(separator) {
      var arr = []
      for (var i = 1; i<arguments.length; i++) {
        arr[i-1] = arguments[i]
      }
      return arr.join(separator)
    }

    console.log(foo(' ', 1, 2, 3))        // 1 2 3
    console.log(typeof foo(' ', 1, 2, 3)) // string

## Разное
В стрелочных функциях, arguments отсутствует.
