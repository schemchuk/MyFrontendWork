
/*
Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50).
 Добавить созданные параграфы в div с классом numbers.
*/

const numbers = document.querySelector(".numbers")
for (let i = 100; i >= 50; i-= 10) {
    numbers.insertAdjacentHTML("beforeend", `<p>${i}</p>`)
}
/*
Написать цикл, который проходится по массиву строк, 
для каждой строки создает параграф и добавляет 
его в div с классом strings_container. Строки взять произвольные.
*/
const names = ["Arsen", "Artem", "Vlad", "Alina", "Iren"]
const stringContainer = document.querySelector(".strings_container")
for (let i = 0; i < names.length; i++) {
    stringContainer.insertAdjacentHTML("beforeend", `<p>${names[i]}</p>`)
}

/*
Написать цикл, который проходится по массиву с объектами 
- у объектов свойства first_name, last_name и  age 
(данные взять произвольные) - и создает карточки только 
\для совершеннолетних пользователей. 
Карточка должна содержать информацию об имени, фамилии 
и возрасте пользователя. Добавить все карточки в div с 
классом users_container.
*/

const persons = [
    {
        firstNane: "Vasja",
        lastName: "Vasinsky",
        age: 17
    },

    {
        firstNane: "Petr",
        lastName: "Petrov",
        age: 25
    },

    {
        firstNane: "Marija",
        lastName: "Marynsky",
        age: 13
    },

    {
        firstNane: "Sonja",
        lastName: "Sonyvsky",
        age: 21
    },

    {
        firstNane: "Anton",
        lastName: "Lubyshenko",
        age: 49
    }

]

