/*
Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
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



/*
Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. 
Значение степени должно быть указано по умолчанию 2.
*/

let arg2 = 2
function power (arg1, arg2 = 2) {
    return arg1 ** arg2
}
console.log(power(4))