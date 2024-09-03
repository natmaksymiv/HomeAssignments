



'use strict'



// Дано інформацію про прибуток К магазинів протягом тижня. Знайти :

  // 2.7 відсортувати кожен тиждень за зростанням;


let stores = [[1,2,3,4,6,7],[1,2,5,4,5,6],[2,10,4,5,6,7],[1,1,4,5,6,7]]


let weeklySums = [];

stores.forEach(week => {
  const sum = week.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  weeklySums.push(sum);
});

// Sort Weekly Increase in Amount:
weeklySums.sort((a, b) => a - b);



document.write(`1,2,3,4,6,7<br>1,2,5,4,5,6<br>2,10,4,5,6,7<br>1,1,4,5,6,7<br>`)

document.write(`Weekly Increase in Amount is: ${weeklySums}`)
