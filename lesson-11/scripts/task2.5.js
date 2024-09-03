


'use strict'



// Дано інформацію про прибуток К магазинів протягом тижня. Знайти :

  // 2.5 максимальний прибуток за середу;


let stores = [[1,2,3,4,5,6,7],[1,2,5,4,5,6,7],[1,2,10,4,5,6,7],[1,2,1,4,5,6,7]]
let maxWednesdayProfit = 0

stores.forEach(store => {
  const wednesdayMax = store [2]
  if (wednesdayMax > maxWednesdayProfit) {
    maxWednesdayProfit = wednesdayMax
  }
})

// console.table(stores)
// console.log(sum)


document.write(`1,2,3,4,5,6,7<br>1,2,5,4,5,6,7<br>1,2,10,4,5,6,7<br>1,2,1,4,5,6,7<br>`)

document.write(`Max wednesday profit is: ${maxWednesdayProfit}`)
