function sueldo(sueldo = Number) {
  if (sueldo >= 3000) return console.log('Debe pagar impuestos')
  return console.log(
    'No debe pagar impuestos su sueldo no sobrepasa los 3.000€'
  )
}

sueldo(2000)
