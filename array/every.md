# every()
Валидация, проверка значений элементов массива. Пробегается по элементам массива, проверяет их в зависимости от условия. Если хотябы один элемент проверку не проходит, то функция возвращает `false`.

    const arrNumber = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const a = arrNumber.every(function(elem) {
        return elem > 0
    })

    console.log(a) // false, есть 0 и отрицательные числа

## Работаем с JSON

    return elem.subname // Проверяем у всех ли есть Фамилия