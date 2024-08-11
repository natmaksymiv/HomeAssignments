


`use strict`



// Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.

let count = 0

function negativeValue (num1, num2, num3, num4, num5) {
  if (num1 < 0 || num2 < 0 || num3 < 0 || num4 < 0 || num5 < 0)
  count ++
return count

}

document.write(negativeValue(-2, -5, 3, 10, 6))


