

'use strict'


//  Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців):

// 1.7 У парних рядках – непарні стовпці, у непарних – парні.


let matrix = [[1,2,3,4,5],[1,2,3,4],[1],[1,2,3,4],[1,2,3],[1,2,3,4]];


// 1.7.1  Even rows - odd columns


function getEvenRowOddColumnSum(matrix) {
  let sum = 0;
  for (let rowIndex = 0; rowIndex < matrix.length ; rowIndex++) {
      for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
        if (rowIndex % 2 ===0 && colIndex % 2 !== 0) {
          sum += matrix [rowIndex] [colIndex]
        }
    }
  }
  return sum
}
let evenRowOddColumnSum = getEvenRowOddColumnSum(matrix);
// 1.7.1  Odd rows - even columns

function getOddRowEvenColumnSum(matrix) {
  let sum = 0;
  for (let rowIndex = 0; rowIndex < matrix.length ; rowIndex++) {
      for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
        if (rowIndex % 2 !==0 && colIndex % 2 === 0) {
          sum += matrix [rowIndex] [colIndex]
        }
    }
  }
  return sum
}
let oddRowEvenColumnSum = getOddRowEvenColumnSum(matrix);


document.write(`1,2,3,4,5<br>1,2,3,4<br>1<br>1,2,3,4<br>1,2,3<br>1,2,3,4<br>`)
document.write(`Total even rows and odd columns sum is :${evenRowOddColumnSum}<br>`)
document.write(`Total odd rows and even columns sum is :${oddRowEvenColumnSum}`)