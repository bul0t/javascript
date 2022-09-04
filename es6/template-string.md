# Template string
Шаблонная строка ES6 ` `` `.  
Пришла на замену обычное строке `''`, `""`.  
Шаблонная строка поддерживает многострочность.  

Пример:

    const a = 'Иван'
    const b = `Привет, ${a}!`
    console.log(b) // Привет, Иван!

Рассмотрим пример создания URL с динамическими данными.

## Многострочность

    function emailMessage(name, mail, status) {
      return `
        Hello ${name},
        Your email ${mail} has been ${status}!
        Thank you for subscription!
      `
    }

    console.log(emailMessage('Ivan', 'ivan@mail.ru', 'approved'))

    Hello Ivan,
    Your email ivan@mail.ru has been approved!
    Thank you for subscription!

## Шаблоны
Благодаря поддержки многострочности, убодно создавать шаблоны:

    generate() {
      return `
        <div class="wrap">
          <div class="list">
            <a class="list__link" href="${this.url}">${this.title}</a>
          </div>
        </div>
      `
    }

## Tagging (тегирование)
Шаблонная строка поддерживает тегирование, используется редко.  
Тегирование позволяет изменить вывод шаблонов, с помощью функции.  
Данную функцию создаём самостоятельно и контролируем поведение шаблона.

Пример, нужно вывести имя заглавными буквами:

    const name = 'Ivan'
    console.log(`Hello, ${name}!`)
    function toUpperCase() {
      // code
    }

Для этого присвоим шаблону тег.  
Тег это название функции, которой можно обработать строку.  
Функция `toUpperCase()` первым параметром принимает массив строковых литералов.  
Второй и последующий параметры это значения вычисленных литералов.

    const name = 'Ivan'
    console.log(toUpperCase`Hello, ${name}!`)

    function toUpperCase(litArr, val) {
      console.log(litArr, val) // Array [ "Hello, ", "!" ] Ivan
    }

В консоли получаем массив строковых литералов и имя.

Делаем имя в верхнем регистре:

    const name = 'Ivan'
    console.log(toUpperCase`Hello, ${name}!`)

    function toUpperCase(litArr, val) {
      console.log(litArr, val) // Array [ "Hello, ", "!" ] Ivan
      return litArr[0] + val.toUpperCase() + litArr[1]
    }
