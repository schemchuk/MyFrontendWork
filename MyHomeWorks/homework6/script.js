//Напишите цикл for, который выводит
// консоль каждое второе число от 0 до 10

// for (let i = 0; i <= 10; i += 2) {
//     console.log(i)
// }

//Напишите цикл for, который выводит в 
//консоль  все числа от 55 до 20

//  for (let i = 20; i <= 55; i++ ) {
//      console.log(i)
//  }

/*
Дан массив numbers. Вывести в консоль
 все числа из массива

const numbers = [3, 5, 11, 2, 8, 1, 6];

Сформировать новый массив
 numbers_squared и передать в него 
 все элементы из массива numbers, 
 возведенные в квадрат
*/
// const numbers = [3, 5, 11, 2, 8, 1, 6];
// const numbers_squared  = []

// for (let i = 0; i < numbers.length; i++) {
//     numbers_squared.push(numbers[i] ** 2)
// }
// console.log(numbers)
// console.log(numbers_squared)

/*
Создать переменную last_elem и передать в нее последний 
элемент из сформированного массива numbers_squared
*/
// const numbers = [3, 5, 11, 2, 8, 1, 6]
// const numbers_squared  = []

// for (let i = 0; i < numbers.length; i++) {
//     numbers_squared.push(numbers[i] ** 2)
// }

// console.log(numbers_squared[numbers_squared.length -1])


/*
Дан объект user. Используя данные из объекта, 
сформировать строку в формате: ‘User’s
 name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’
*/
const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }
console.log(`User's name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`)    