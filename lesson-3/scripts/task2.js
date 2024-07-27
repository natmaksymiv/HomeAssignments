
'use strict'

  // вводимо необхідні перемінні
  const priceOfProduct = parseFloat(prompt('Введіть ціну товару:'))
  const availableMoney = parseFloat(prompt('Введіть наявну суму:'))
  const priceLotteryTicket = 4





  // знаходимо результат

  if((availableMoney - priceOfProduct) >= priceLotteryTicket)
    document.write(` Дякуємо за покупку! Пропонуємо купити лотерейний квиток за ${priceLotteryTicket} грн`)
  else if(priceOfProduct <= availableMoney)
      document.write(`Дякуємо за покупку!`)
  else
  document.write(`На Вашому рахунку недостатньо грошей`)





  // виводимо результат
