
'use strict'


// Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.


// let userNum = parseInt(prompt (`Введіть перше число`))

// function getSum (a, b, c, d) {
//   let sum = a + b + c + d;
//   return sum
// }
// document.write (getSum (1, 2, 3, 4))

// Multiplication
// function getMultiplication (a, b, c, d) {
//   let multiplication = a * b * c * d;
//   return multiplication
// }
// document.write (getMultiplication (1, -2, 3, 4))

// Average
// function getAverage (a, b, c, d) {
//   let average = (a + b + c + d) / 4;
//   return average
// }
// document.write (getAverage (1, -2, 3, 4))

// Math min

function getMathMin (a, b, c, d) {
  let mathMin = Math.min(a, b, c, d);
  return mathMin
}
document.write (getMathMin (1, -2, 3, 4))
