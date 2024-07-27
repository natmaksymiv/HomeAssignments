
'use strict'

  // вводимо необхідні перемінні
  const userCategory = prompt('Введіть категорію:')
  const categoryA = 'А'
  const categoryB = 'В'
  const categoryC = 'С'
  const allCategory = `А В С`







  // знаходимо результат
  if(userCategory === categoryA)
    document.write(`Ви можете керувати мотоциклом`)
  else if(userCategory === categoryB)
    document.write(`Ви можете керувати легковим автомобілем`)
  else if(userCategory === categoryC)
    document.write(`Ви можете керувати вантажним автомобілем`)
  else if(userCategory === allCategory)
    document.write(`Ви можете керувати мотоциклом, легковим автомобілем, вантажним автомобілем`)
  else
    document.write(`Ви не можете керувати транспортом`)
  // else if(userAge > preschool && userAge <= pension)
  //   document.write(`Ваш вік підходить для дитячого садка`)



  // виводимо результат