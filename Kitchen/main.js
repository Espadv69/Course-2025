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
  const $editProductBtn = document.querySelector('.editProduct')

  const defaultProducts = [
    {
      code: '45435',
      name: 'Pollo',
      initialQuantity: 50,
      entries: 0,
      exits: 0,
      stock: 50,
    },
    {
      code: '45436',
      name: 'Carne',
      initialQuantity: 30,
      entries: 0,
      exits: 0,
      stock: 30,
    },
    {
      code: '45437',
      name: 'Pescado',
      initialQuantity: 80,
      entries: 0,
      exits: 0,
      stock: 80,
    },
    {
      code: '45438',
      name: 'Marisco',
      initialQuantity: 90,
      entries: 0,
      exits: 0,
      stock: 90,
    },
    {
      code: '45439',
      name: 'Verdura',
      initialQuantity: 50,
      entries: 0,
      exits: 0,
      stock: 50,
    },
  ]

  // Products from localStorage
  let products = JSON.parse(localStorage.getItem('products'))
  if (!products || products.length === 0) {
    products = [...defaultProducts]
    localStorage.setItem('products', JSON.stringify(products))
  }

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

  function editProduct() {
    const code = prompt('Ingrese el código del producto a editar')
    if (!code) return alert('Debe ingresar un código')

    const index = products.findIndex((p) => p.code === code)
    if (index === -1) return alert('No se encuentra el producto')

    const newEntries =
      parseInt(
        prompt(
          `Entradas actuales: ${products[index].entries}\nIngrese nuevas entradas:`
        ),
        10
      ) || products[index].entries

    const newExits =
      parseInt(
        prompt(
          `Salidas actuales: ${products[index].exits}\nIngrese nuevas salidas`
        ),
        10
      ) || products[index].exits

    products[index].entries = newEntries
    products[index].exits = newExits
    products[index].stock =
      products[index].initialQuantity + newEntries - newExits

    localStorage.setItem('products', JSON.stringify(products))
    renderTable()
  }

  $addProductBtn.addEventListener('click', addProduct)
  $editProductBtn.addEventListener('click', editProduct)

  renderTable()
})
