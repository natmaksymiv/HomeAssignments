
'use strict'




// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.


 const dayNum = parseInt(prompt(`Введіть число від 1 до 7`))

function dayWeek () {
  if (dayNum >= 1 && dayNum <=5)
    return `It's a working day`
   else if (dayNum === 6 || dayNum ===7)
    return `It's a weekend`
  else
    return `Incorrect value`
}

document.write(dayWeek (dayNum))