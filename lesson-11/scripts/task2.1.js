


'use strict'



// Дано інформацію про прибуток К магазинів протягом тижня. Знайти :

  // 2.1 загальний прибуток кожного масиву за тиждень;


let stores = [[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]]



function calcWeeklyProfit(stores) {
  let weeklyProfits = []

  for (const store of stores) {
    let totalProfit = 0;
    for (const profit of store) {
      totalProfit += profit
    }
    weeklyProfits.push(totalProfit);
  }
  return weeklyProfits
}

const weeklyProfits = calcWeeklyProfit(stores)


document.write(`1,2,3,4,5,6,7<br>1,2,3,4,5,6,7<br>1,2,3,4,5,6,7<br>1,2,3,4,5,6,7<br>`)

document.write(`Total profit is: ${weeklyProfits}`)


