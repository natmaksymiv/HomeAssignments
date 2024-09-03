
'use strict'


//  Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців):

// 1.1 номери рядків від 0 до половини, стовпці від 0 до половини


let matrix = [[1,2,3,4,5,6,7,8,9],[1],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];
const halfRowMatrix =Math.floor( matrix.length / 2)


function getHalfSum(matrix) {
  let sum = 0;
  for (let rowIndex = 0; rowIndex < halfRowMatrix; rowIndex++) {
    const halfColMatrix = Math.floor(matrix[rowIndex].length / 2)

    for (let colIndex = 0; colIndex < halfColMatrix; colIndex++) {
      sum += matrix[rowIndex] [colIndex]
    }
  }
  return sum
}
let totalSum = getHalfSum(matrix);

// console.log(matrix)
// console.log(halfRowMatrix)
// console.log(`${totalSum}`)
document.write(`1,2,3,4,5,6,7,8,9,<br>1,<br>1,2,3,4,5,6,7,8,9,<br>1,2,3,4,5,6,7,8,9<br>`)
document.write(`Total sum is :${totalSum}`)






