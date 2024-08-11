
'use strict'



// Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.

//  cm to inch

// const inch = 2.54


// function getCmToInch (cm) {
//   let cmToInch = cm / inch
//   return cmToInch
// }
// document.write(getCmToInch (10).toFixed(2))

// Kilograms to pounds. To convert from kilogram to pound(lb), we multiply by 2.2.

// const pound = 2.2


// function getKgToPound (kg) {
//   let kgToPound = kg * pound
//   return kgToPound
// }
// document.write(getKgToPound (10).toFixed(2))

// Kilometers in a mile. For n number of km = (n × 0.62137119) miles

const mile = 0.62137119


function getKmInMiles (km) {
  let kmInMiles = km * mile
  return kmInMiles
}
document.write(getKmInMiles (10).toFixed(2))