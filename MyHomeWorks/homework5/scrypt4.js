const yourName = prompt("Enter your name") 
const yourAge = +prompt("Enter your age")

if (yourAge < 18) {
    console.log(`Hello ${yourName} drink tea`)
} else {
    console.log(`Hello ${yourName} drink beer`)
}

//Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.