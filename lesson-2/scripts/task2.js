
'use strict'

// перемінні
const birthDay = '1 січня'
let birthYear = Math.abs(Math.floor(prompt('Введіть рік народження') / 1000))
const currentYear = new Date().getFullYear()

// знаходимо результат
let currentAge = parseInt(currentYear - birthYear)

// виводимо результат
document.write(`Ваш вік: ${currentYear} - ${birthYear} = ${Math.abs(currentAge)}`)