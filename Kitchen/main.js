// DOM elements
const $themeBtn = document.querySelector('.themeToogle')


// Toogle Theme
let isDark = false
$themeBtn.addEventListener('click', () => {
  isDark = !isDark
  document.body.className = isDark ? 'dark' : 'light'
})
