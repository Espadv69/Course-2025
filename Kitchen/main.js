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

  renderTable()
})
