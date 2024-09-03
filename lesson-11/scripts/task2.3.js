


'use strict'



// Дано інформацію про прибуток К магазинів протягом тижня. Знайти :

  // 2.3 загальний прибуток за робочі дні;


let stores = [[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]]
let sum = 0

for (let storeRow = 0; storeRow < stores.length; storeRow++) {
  for (let weekDay = 0; weekDay < 5; weekDay++) {
    sum += stores[storeRow][weekDay]
  }
}

// console.table(stores)
// console.log(sum)


document.write(`1,2,3,4,5,6,7<br>1,2,3,4,5,6,7<br>1,2,3,4,5,6,7<br>1,2,3,4,5,6,7<br>`)

document.write(`Total weekday profit is: ${sum}`)
