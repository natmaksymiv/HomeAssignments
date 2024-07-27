
// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься




  // вводимо необхідні перемінні
  let numberOfMonth = parseInt(prompt('Введіть номер місяця:'))
  let season = "Зима"



  // знаходимо результат
  switch (numberOfMonth) {
    case 1:
      case 2: season = "Зима"
      break;
      case 3:
      case 4:
      case 5: season = "Весна"
      break;
      case 6:
      case 7:
      case 8: season = "Літо"
      break;
      case 9:
      case 10:
      case 11: season = "Осінь"
      break;
      case 12: season = "Зима"
      break;
    default: season = "Перевірте правильність введених даних"
      break;
  }



  // виводимо результат

  document.write(season)