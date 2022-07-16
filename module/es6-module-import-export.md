# import/export модулей ES6

Импортируем значение `rand` из модуля **math.js**  
Импортируем значение `displayNumber` из модуля **dom.js**

Код в файле `index.js`:

    import { rand } from './math.js'
    import { displayNumber } from './dom.js'

    const number = rand( 1, 5, 3, 7 )
    displayNumber(number)

Прежде чем выполнится код, сначала загрузятся и выполнятся все импортируемые модули.

Код в файле `math.js`:

    const rand = () => {
        // выбор случайного числа
    };
    export { rand };

Код в файле `dom.js`:

    const displayNumber = () => {
        // вывод числа
    };
    export { displayNumber };

Экспортируемое значение не копируется, это реальное соединение. Импорт это ссылка (указатель) на экспортируемое значение.

## Разное
Модули импортируются синхронно, а загружаются асинхронно.  
