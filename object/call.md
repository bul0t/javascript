# call()

    foo.call(context, arg1, arg2, ...)

this, можно присваивать различные объекты при вызове существующей функции.  
this ссылается на текущий объект, вызвавший функцию или метод.  
С помощью call можно написать метод один раз, а затем наследовать его в других объектах, без необходимости переписывать метод для каждого нового объекта.

При этом вызывается функция `foo`, первый аргумент `call` становится её this, а остальные передаются как есть.  
При этом следует обратить внимание, что this может не быть реальным значением, видимым этим методом.  
Если метод является функцией не в строгом режиме, значение null и undefined будут заменены глобальным объектом, а примитивне значения будут упакованы в объекты соответсвующего типа.  
Таким образом, при выполнении функции всегда будет соблюдаться условие `typeof this` будет равно object.

Для пример создадим функцию которая будет выводить в консоль имя пользователя:

    function showFullName() {
      console.log(this.firstName + ' ' + this.lastName)
    }

    var user = {
      firstName: 'Иван',
      lastName: 'Иванов'
    }

    showFullName.call(user)

Создадим функцию `showFullname()`.  
Создадим объект `user`.  
Привяжем контекст вызова функции showFullname() к объекту user.

После контекста в call() можно передавать аргументы для функции:

    function showFullName(a, b) {
      console.log(this[a] + ' ' + this[b])
    }

    var user = {
      firstName: 'Иван',
      lastName: 'Иванов',
      patronym: 'Иванович'
    }

    showFullName.call(user, 'firstName', 'lastName') // Иван Иванов
    showFullName.call(user, 'firstName', 'patronym') // Иван Иванович

Функция стала умнее и конструирует строку в зависимости от переданных ей аргументов.

## prototype
При помощи метода call(), можно взять метод одного объекта (в том чисте и встроенного) и вызвать в контексте другого. Например `arguments` это не массив, а псевдомассив (объект) и методов массива (push, pop, join и т.д.) у него нет.

Мы уже преобразовывали псевдомассив `arguments` в массив с помощью цикла for, сделаем тоже самое только через call().

Создаём функцию, которая из переданных ей аргументов формирует массив:

    function createArray() {
      var args = Array.prototype.slice.call(arguments)
      console.log(args)
    }

    createArray('el1', 'el2', 'el3') // Array(3) [ "el1", "el2", "el3" ]

`slice.call(arguments)` вызываем метод slice() в контексте объекта arguments.  
При этом совершенно не важно, к кому объекту принадлежит функция, в качестве текущего объекта this, будет взят первый аргумент.