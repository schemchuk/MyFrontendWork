
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
        firstName: "Vasja",
        lastName: "Vasinsky",
        age: 17
    },
    {
        firstName: "Petr",
        lastName: "Petrov",
        age: 25
    },
    {
        firstName: "Marija",
        lastName: "Marynsky",
        age: 13
    },
    {
        firstName: "Sonja",
        lastName: "Sonyvsky",
        age: 21
    },
    {
        firstName: "Anton",
        lastName: "Lubyshenko",
        age: 49
    }
];

const usersContainer = document.querySelector(".users_container");

for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
        usersContainer.insertAdjacentHTML("beforeend", `<div class="user_card">
            <h5>${persons[i].firstName}</h5>
            <p>${persons[i].lastName}</p>
            <p>${persons[i].age}</p>
        </div>`);
    }
}


