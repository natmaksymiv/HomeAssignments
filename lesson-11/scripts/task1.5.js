


'use strict'


//  Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців):

// 1.5 Суму парних рядків


let matrix = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1],[1,2,3,4,5,6,7,8,9],[1,2,3],[1,2,3,4]];


function getEvenRowSum(matrix) {
  let sum = 0;
  for (let rowIndex = 0; rowIndex < matrix.length ; rowIndex++) {

    if (rowIndex % 2 === 0) {
      for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
        sum += matrix [rowIndex] [colIndex]
      }
    }
  }
  return sum
}
let sumEvenRow = getEvenRowSum(matrix);


document.write(`1,2,3,4,5,6,7,8,9,<br>1,2,3,4,5,6,7,8,9,<br>1,<br>1,2,3,4,5,6,7,8,9<br>1,2,3<br>1,2,3,4<br>`)
document.write(`Total sum is :${sumEvenRow }`)
