

'use strict'


//  Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців):

// 1.6 Суму непарних стовпців


let matrix = [[1,2,3,4,5],[1,2,3,4],[1],[1,2,3,4],[1,2,3],[1,2,3,4]];


function getOddColumnSum(matrix) {
  let sum = 0;
  for (let rowIndex = 0; rowIndex < matrix.length ; rowIndex++) {
      for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
        if (colIndex % 2 !== 0) {
          sum += matrix [rowIndex] [colIndex]
        }
    }
  }
  return sum
}
let sumOddColumn = getOddColumnSum(matrix);


document.write(`1,2,3,4,5<br>1,2,3,4<br>1<br>1,2,3,4<br>1,2,3<br>1,2,3,4<br>`)
document.write(`Total sum is :${sumOddColumn}`)