
'use strict'

// перемінні
let quantityGoods = parseInt(prompt('Введіть кількість товару:'))
let pricePerUnit = parseFloat(prompt('Введіть ціну за одиницю товару:'))
let taxPercent = '5'


// знаходимо результат

let totalSum = (quantityGoods * pricePerUnit).toFixed(2)
let valueAddedTax = (totalSum * taxPercent / 100).toFixed(2)

// виводимо результат
document.write(`Загальна вартість: ${totalSum} <br>
  ПДВ (5%): ${valueAddedTax}`)