


'use strict'


//  Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців):

// 1.4 номери рядків від половини до кінця , стовпці від половини до кінця


let matrix = [[1,2,3,4,5,6,7,8,9],[1],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3]];
const halfRowMatrix =Math.floor( matrix.length / 2)


function getHalfSum(matrix) {
  let sum = 0;
  for (let rowIndex = halfRowMatrix; rowIndex < matrix.length ; rowIndex++) {
    const halfColMatrix = Math.floor(matrix[rowIndex].length / 2)

    for (let colIndex = halfColMatrix; colIndex < matrix[rowIndex].length; colIndex++) {
      sum += matrix[rowIndex] [colIndex]
    }
  }
  return sum
}
let totalSum = getHalfSum(matrix);


document.write(`1,2,3,4,5,6,7,8,9,<br>1,<br>1,2,3,4,5,6,7,8,9,<br>1,2,3,4,5,6,7,8,9<br>1,2,3<br>`)
document.write(`Total sum is :${totalSum}`)

