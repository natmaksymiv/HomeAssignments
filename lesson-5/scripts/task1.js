
'use strict'

let userCountList = parseInt(prompt(`Введіть будь-яке число`));

for (let i = 1; i <= userCountList; i++) {
  let randomNum = 1 + Math.floor(Math.random() * 100);
    document.write(`
      <ul>
      <li>${randomNum}</li>
      </ul>`)
}



