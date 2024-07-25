
'use strict'

// перемінні

const minMonth = 1
const maxMonth = 12
let randomMonth = Math.round(Math.random() * (maxMonth - minMonth) + minMonth)
const minNumber = 1
const maxNumber = 6
let randomNumber = Math.round(Math.random() * (maxNumber - minNumber) + minNumber)


// знаходимо результат

let randomSum = randomMonth + randomNumber

console.log(randomSum)




// виводимо результат
  document.write(`Сума випадкового номера місяца і числа: ${randomSum}`)
