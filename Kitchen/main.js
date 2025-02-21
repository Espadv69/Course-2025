// Toogle Theme
const $themeBtn = document.querySelector('.themeToogle')
let isDark = false
$themeBtn.addEventListener('click', () => {
  isDark = !isDark
  document.body.className = isDark ? 'dark' : 'light'
})

document.addEventListener('DOMContentLoaded', () => {
  // DOM
  const $tbody = document.querySelector('tbody')
  const $addProductBtn = document.querySelector('.addProduct')

  // Products from localStorage
  let products = JSON.parse(localStorage.getItem('products')) || []

  // Function to render table
  function renderTable() {
    $tbody.innerHTML = ''

    products.forEach((product) => {
      const $row = document.createElement('tr')

      $row.innerHTML = `
        <td>${product.code}</td>
        <td>${product.name}</td>
        <td>${product.initialQuantity}</td>
        <td>${product.entries}</td>
        <td>${product.exits}</td>
        <td>${product.stock}</td>
      `

      $tbody.appendChild($row)
    })
  }

  // Function to add Product
  function addProduct() {
    const code = prompt('Ingrese el código del producto')
    if (!code) return alert('Debe ingresar el código del producto')

    if (products.some((p) => p.code === code)) {
      return alert('Este código ya existe en otro producto')
    }

    const name = prompt('Ingrese el nombre del producto')
    const initialQuantity = parseInt(prompt('Cantidad inicial'), 10) || 0
    const entries = 0
    const exits = 0
    const stock = initialQuantity

    const product = { code, name, initialQuantity, entries, exits, stock }

    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))

    renderTable()
  }

  $addProductBtn.addEventListener('click', addProduct)

  renderTable()
})
