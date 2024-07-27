
'use strict'

  // вводимо необхідні перемінні
  const userAge = prompt('Введіть свій вік:')
  const newBorn = Math.floor(0)
  const preschool = Math.floor(6)
  const school = Math.floor(18)
  const student = Math.floor(23)
  const worker = Math.floor(67)
  const pension = Math.floor(Infinity)






  // знаходимо результат
  if(userAge === newBorn)
    document.write(`Вітаю! Ви народилися!`)
  else if(userAge > newBorn && userAge <= preschool)
    document.write(`Ваш вік підходить для дитячого садка`)
  else if(userAge > preschool && userAge <= school)
    document.write(`Ваш вік підходить для школи`)
  else if(userAge > school && userAge <= student)
    document.write(`Ваш вік підходить для вищого учбового закладу`)
  else if(userAge > student && userAge <= worker)
    document.write(`Ваш вік підходить працювати`)
  else if(userAge > worker && userAge <= pension)
    document.write(`Ваш вік підходить бути пенсіонером`)
  // else if(userAge > preschool && userAge <= pension)
  //   document.write(`Ваш вік підходить для дитячого садка`)



  // виводимо результат