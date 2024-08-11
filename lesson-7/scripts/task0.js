
'use strict'

// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

 const numMonth = parseInt(prompt `Введіть число від 1 до 12`)


function getSeason(month) {

  let season;


  switch (month) {
    case 12:
    case 1:
    case 2: season = "Winter"
      break;
    case 3:
    case 4:
    case 5: season = "Spring"
      break;
    case 6:
    case 7:
    case 8: season = "Summer"
      break;
    case 9:
    case 10:
    case 11: season = "Fall"
      break;
    default: season = "Incorrect value"
      break;
  }

  return season
}
document.write(`Month ${numMonth} is ${getSeason(numMonth)} season.`)
