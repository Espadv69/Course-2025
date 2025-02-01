window.addEventListener('DOMContentLoaded', () => {
  //DOM elements
  const $btnCourse1 = document.querySelector('.course1')
  const $btnCourse2 = document.querySelector('.course2')
  const $btnCourse3 = document.querySelector('.course3')
  const $exitButtons = document.querySelectorAll('.exit')
  const $addButtons = document.querySelectorAll('.add')
  const $tbody = document.querySelector('.tbody-assess')
  const $course1_content = document.querySelector('.course1-container')
  const $course2_content = document.querySelector('.course2-container')
  const $course3_content = document.querySelector('.course3-container')

  // Initialize hidden
  function hideAllCourses() {
    $course1_content.style.display = 'none'
    $course2_content.style.display = 'none'
    $course3_content.style.display = 'none'
  }

  hideAllCourses() // Close all tabs when it's initialize

  // Function to add course data to the table
  function addToTable(courseContainer) {
    const courseName = courseContainer.querySelector('h3').textContent
    const hours = courseContainer.querySelector('.p-hours strong').textContent

    // Create a new row
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${courseName}</td>
      <td>${hours}</td>
      <td></td>
    `

    // Append the row to the table body
    $tbody.appendChild(row)
  }

  $btnCourse1.addEventListener('click', () => {
    hideAllCourses()
    $course1_content.style.display = 'block'
  })

  $btnCourse2.addEventListener('click', () => {
    hideAllCourses()
    $course2_content.style.display = 'block'
  })

  $btnCourse3.addEventListener('click', () => {
    hideAllCourses()
    $course3_content.style.display = 'block'
  })

  $exitButtons.forEach((button) => {
    button.addEventListener('click', hideAllCourses)
  })
})
