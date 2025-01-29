document.addEventListener('DOMContentLoaded', async function () {
  const $navbar = document.querySelector('.navbar')

  try {
    const response = await fetch('includes/navbar.html')
    if (!response.ok) {
      throw new Error('Failed to load the navbar')
    }
    const navbarHTML = await response.text()
    $navbar.innerHTML = navbarHTML
  } catch (e) {
    console.error('Error:', e)
  }
})
