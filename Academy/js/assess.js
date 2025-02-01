window.addEventListener('DOMContentLoaded', () => {
  // 1. DOM elements
  const $tbody = document.querySelector('.tbody-assess')
  const $exitButtons = document.querySelectorAll('.exit')
  const $addButtons = document.querySelectorAll('.add')

  // 2. Buttons Map: Mapea cada botón de curso a su contenedor correspondiente
  const courseButtons = {
    '.course1': '.course1-container',
    '.course2': '.course2-container',
    '.course3': '.course3-container',
  }

  // 3. Function to hide all courses
  function hideAllCourses() {
    Object.values(courseButtons).forEach((selector) => {
      document.querySelector(selector).style.display = 'none'
    })
  }

  hideAllCourses() // Hide all course containers on load

  // 4. Event to show courses modal
  Object.entries(courseButtons).forEach(([buttonClass, containerSelector]) => {
    document.querySelector(buttonClass).addEventListener('click', () => {
      hideAllCourses()
      document.querySelector(containerSelector).style.display = 'block'
    })
  })

  // 5. Event to hide courses when clicking "Exit"
  $exitButtons.forEach((button) => {
    button.addEventListener('click', hideAllCourses)
  })

  // 6. Function to add data to the table
  function addToTable(courseContainer) {
    if (!courseContainer) {
      console.error('Course container not found')
      return
    }

    const courseNameElement = courseContainer.querySelector('h3')
    const hoursElement = courseContainer.querySelector('.p-hours strong')

    if (!courseNameElement || !hoursElement) {
      console.error('Missing course name or hours')
      return
    }

    const courseName = courseNameElement.textContent.trim()
    const hours = hoursElement.textContent.trim()

    // Create a new table row and insert course data
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${courseName}</td>
      <td>${hours}</td>
      <td>-</td>
    `

    $tbody.appendChild(row)
  }

  // 7. Add event to "Add to table" buttons
  $addButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // Find the closest course container by going from the footer to its parent
      const courseContainer =
        event.target.closest('.footer-container')?.parentElement
      if (!courseContainer) {
        console.error('Course container not found for button:', event.target)
        return
      }

      addToTable(courseContainer)
    })
  })
})
