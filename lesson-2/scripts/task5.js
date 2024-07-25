
'use strict'

// перемінні

let sec = parseInt(prompt('Вказати кількість секунд, що пройшли від початку доби:'))

// знаходимо результат

let secToMin = sec / 60
let secToHour = sec / 3600




// виводимо результат
  document.write(`Кількість секунд, що пройшли від початку доби: ${sec} сек <br>
  Хвилини: ${secToMin.toFixed(2)} хв  <br>
  Години: ${secToHour.toFixed(2)} год
  `)


