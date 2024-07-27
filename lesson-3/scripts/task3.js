


'use strict'

  // вводимо необхідні перемінні
  let userGuess = parseInt(prompt('Введіть будь-яке число від 1 до 5. Це перша спроба. Всього спроб дві:'))
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  let attempts = 2;

  // знаходимо результат
  if(userGuess === randomNumber)
     document.write(` Вітаємо! Ви вгадали число. Сгенероване число було ${randomNumber}`)
    else if(userGuess !== randomNumber) {
      let userGuess = parseInt(prompt('Введіть будь-яке число від 1 до 5. Це друга спроба. Всього спроб дві:'))
      document.write(` Неправильно. Сгенероване число було ${randomNumber}`)
    }
    else
      document.write(`У вас більше немає спроб.`)





  // виводимо результат
