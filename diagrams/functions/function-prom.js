function prom(n1 = Number, n2 = Number, n3 = Number) {
  if (n1 > 10 || n2 > 10 || n3 > 10) {
    return console.log('Una nota ingresada es mayor a 10')
  } else {
    const promedio = (n1 + n2 + n3) / 3

    if (promedio >= 7) return console.log('Promocionado', promedio.toFixed(2))
    if (promedio < 7 && promedio >= 4)
      return console.log('Regular', promedio.toFixed(2))
    if (promedio < 4) return console.log('Reprobado', promedio.toFixed(2))
  }
}

prom(4, 3, 5)
