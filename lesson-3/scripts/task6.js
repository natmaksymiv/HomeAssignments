
'use strict'

// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

  // вводимо необхідні перемінні
  let numberDayWeek = parseInt(prompt('Введіть номер дня тижня:'))
  let dayOfWeek= "Понеділок"



  // знаходимо результат
  switch (numberDayWeek) {
    case 1: dayOfWeek = "Понеділок"
      break;
      case 2: dayOfWeek = "Вівторок"
      break;
      case 3: dayOfWeek = "Середа"
      break;
      case 4: dayOfWeek = "Четвер"
      break;
      case 5: dayOfWeek = "Пʼятниця"
      break;
      case 6: dayOfWeek = "Субота"
      break;
      case 7: dayOfWeek = "Неділя"
      break;
    default: dayOfWeek = "Перевірте правильність введених даних"
      break;
  }



  // виводимо результат

  document.write(dayOfWeek)