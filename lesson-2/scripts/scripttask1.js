
'use strict'

// перемінні
let a = parseFloat(prompt('Введіть а', '0'))
let b = parseFloat(prompt('Введіть b', '0'))

// знаходимо результат
let summ = a + b
let substraction = a * b
let division = a / b

// виводимо результат
document.write(`
  <table border='2px'>
    <tr>
      <th>Шуканий результат</th>
      <th>Отриманий результат</th>
    </tr>
    <tr>
      <th>Сума</th>
      <th>${summ}</th>
    </tr>
    <tr>
      <th>Добуток</th>
      <th>${substraction}</th>
    </tr>
    <tr>
      <th>Ділення</th>
      <th>${division}</th>
    </tr>
  </table>
  `)