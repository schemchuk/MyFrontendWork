
for (let i = 100; i >= 50; i -= 10) {
const numbersDiv = document.querySelector(".numbers")
const paragraph = document.createElement("p")
paragraph.innerText = i
numbersDiv.append(paragraph)
}

