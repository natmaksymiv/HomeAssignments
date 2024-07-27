
'use strict'

  // вводимо необхідні перемінні
  let firstChildName = prompt('Введіть імʼя дитини:')
  let secondChildName = prompt('Введіть імʼя іншої дитини:')
  let firstChildCountCandy = prompt(`Скільки цукерок має ${firstChildName}`)
  let secondChildCountCandy = prompt(`Скільки цукерок має ${secondChildName}`)





  // знаходимо результат
  if(firstChildCountCandy > secondChildCountCandy)
    document.write(`Більше цукерок має ${firstChildName}`)
  else if(firstChildCountCandy = secondChildCountCandy)
    document.write(`Діти маєть одинакову кількість цукерок`)
  else document.write(`Більше цукерок має ${secondChildName}`)



  // виводимо результат
