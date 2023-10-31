/*
Напишите функцию, которая принимает два числовых аргумента
 и возвращает наименьшее из них.
*/

// function printEvenNumbers (number1 , number2) {
//     if (number1 < number2) {
//         maxNumber = number2
//         minNumber = number1
//     } else {
//         maxNumber = number1
//         minNumber = number2
//     }

//     if (maxNumber %2 != 0) {
//         maxNumber = maxNumber - 1
//     }
//     for (let index = maxNumber; index >= minNumber; index -= 2) {
//         console.log(index)
//     }
// }
// printEvenNumbers(3, 56)

/*
Напишите функцию, которая принимает два числовых аргумента
 и выводит 
в консоль все четные числа от большего к меньшему.
*/
function logEvenNums(a, b) {
    if (a === b) {
        console.log(`Число ${a} равно числу ${b}`)
    }
    let min = a
    let max = b
    if(a > b) {
         min = b
         max =a 
    }

    for (let i = max; i >= min; i--) {
        if (i %2 === 0) {
            console.log(i)
        }
    }
}


logEvenNums(15, 7)

/*
Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. 
Значение степени должно быть указано по умолчанию 2.
*/

let arg2 = 2
function power (arg1, arg2 = 2) {
    return arg1 ** arg2
}
console.log(power(4))

/*
Напишите функцию, которая принимает 
числовой аргумент n и считает сумму чисел от 1 до n.
*/
function sum(n) {
    if (n < 1) {
        return null
    }
    let sum = 0
     for (let i = 1; i <= n; i++) {
        sum += i
     }
     return sum
}
console.log(sum(12))
console.log(sum(-5))
/*
Напишите функцию, которая принимает два числовых аргумента 
n и m и считает сумму четных чисел и нечетных чисел 
от n до m. Суммы выведите в консоль 
(в начале сумму четных чисел, а затем сумму нечетных).
*/
function logSumOfEvensAndOdds(n, m) {
    let sumOfOdds = 0
    let sumOfEvens = 0

    for (let i = n; i <= m; i ++) {
        if (i % 2 === 0) {
            sumOfEvens += i 
        } else {
            sumOfOdds += i
        }
    }
    console.log(`Сумма четных чисел ${sumOfEvens}`)
    console.log(`Сумма нечетных чисел ${sumOfOdds}`)
}
logSumOfEvensAndOdds(5, 18)
/*
Напишите функцию, которая принимает в качестве 
аргументов массив строк, а возвращает первый самый 
длинный элемент массива. Если входной массив пуст, 
функция возвращает null. 
Если есть несколько одинаковых по длине элементов - функция
 возвращает первый из этих элементов. 
Пример: [ 'one', 'two', 'three' ] => 'three'

*/ 

function getLongerString(arr) {
    let longerString = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longerString.length) {
            longerString = arr[i]
        }
    }
    return longerString
}

const arr = ["one", "two", "tree", "sdfg"]
console.log(getLongerString(arr))