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
})
