function mayor(num1 = Number, num2 = Number) {
  if (num1 === num2) return console.log('No pueden ser dos números iguales')
  if (num1 > num2) return console.log(num1)
  return console.log(num2)
}

mayor(7, 4)
