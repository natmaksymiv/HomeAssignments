
'use strict'

// перемінні

let lengthInCentimeters = parseFloat(prompt('Введіть довжину:'))


// знаходимо результат

let centimetersToMeters = lengthInCentimeters / 100
let centimetersToKilometers = lengthInCentimeters / 100000



// виводимо результат
document.write(`Загальна довжина в сантиметрах: ${lengthInCentimeters.toFixed(2)} см <br>
  Загальна довжина в метрах: ${centimetersToMeters.toFixed(2)} м<br>
  Загальна довжина в кілометрах: ${centimetersToKilometers} км`)


