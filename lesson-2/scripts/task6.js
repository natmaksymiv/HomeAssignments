
'use strict'

// перемінні

let priceBoll = parseFloat(prompt('Вказати вартість м\'яча:'))
let quantityBoll = parseInt(prompt('Вказати кількість м\'ячів:'))

let priceBox = parseFloat(prompt('Вказати вартість коробки:'))
let quantityBox = parseInt(prompt('Вказати кількість коробок:'))

let pricePen = parseFloat(prompt('Вказати вартість ручки:'))
let quantityPen = parseInt(prompt('Вказати кількість ручок:'))

// знаходимо результат

let totalPriceBoll = quantityBoll * priceBoll
let totalPriceBox = quantityBox * priceBox
let totalPricePen = quantityPen * pricePen
let totalPrice = totalPriceBoll + totalPriceBox + totalPricePen




// виводимо результат
  document.write(`М'яч: ${quantityBoll.toFixed(0)} шт x ${Math.ceil(priceBoll)} грн =  ${totalPriceBoll.toFixed(2)} грн<br>
  Коробка: ${quantityBox.toFixed(0)} шт x ${Math.ceil(priceBox)} грн =  ${totalPriceBox.toFixed(2)} грн <br>
  Ручка: ${quantityPen.toFixed(0)} шт x ${Math.ceil(pricePen)} грн =  ${totalPricePen.toFixed(2)} грн <br>
  До сплати: ${Math.ceil(totalPrice)} грн
  `)




  console.log(Math.ceil(2.35 * 10))