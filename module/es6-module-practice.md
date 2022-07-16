# Модули ES6 практика

## Импортируем весь модуль
Самое простое это импортировать весь модуль, а не значение из него:

    // index.html
    <script type="module" src="script.js"></script>

    // script.js
    import './module.js';

    // module.js
    console.log('hello');

## Экспорт импорт данных
Переменные внутри модуля не доступны из вне, их нужно экспортировать `export`.

module.js:

    export const a = 3;
    export const b = 5;

    export const foo = function (a, b) {
        return a + b
    }

    console.log('hello')


script.js:

    import { a, b, foo } from './module.js';

    console.log(a);        // 3
    console.log(b);        // 5
    console.log(foo(1, 2)) // 3

Сначала выведет `hello`, потом `3`, `5`, `3`.

## Экспорты именованные `export`
Экспорты в ES6 бывают именованными и по-умолчанию.

    export const a = 3; // именованный экспорт

Можно экспортировать сразу несколько данных через именованный экспорт:

    const a = 3;
    const b = 5;

    const foo = function (a, b) {
        return a + b
    }

    export { a, b, foo };

### Изменяем имена экспортируемых/импортированных данных `as`

    // module.js
    export { a as num, b, foo };

    // script.js
    import { num, b as num2, foo } from './module.js';

    console.log(num); // 3
    console.log(num2); // 5
    console.log(foo(1, 2)) // 3

### Импортируем всё `*`

    import * as moduleName from './module.js';

    console.log(moduleName.a); // 3
    console.log(moduleName.b); // 5
    console.log(moduleName.foo(1, 2)) // 3

## Экспорты, по-умолчанию `default`
Рекомендуемый способ. Дефолтные экспорты применяются когда нужно экспортировать не несколько данных, а один. Не имя, а значение. При импорте, можем дать этому экспорту любое имя.

    // module.js
    export default function (a, b) {
        return a + b
    }

    // script.js
    import myName from './module.js';

    console.log(myName(4,5)); // 9

## Разное
- импортирвать можно без указания расширения `.js`
- импорты всплывают на самый верх кода
- экспорты нужно указывать в высшем порядке, нельзя внутри функций и других блоков
- именованные и дефолтные экспорты можно использовать совместно (на практике не используется)
