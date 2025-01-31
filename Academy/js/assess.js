window.addEventListener('DOMContentLoaded', () => {
  //DOM elements
  const $btnCourse1 = document.querySelector('.course1')
  const $btnCourse2 = document.querySelector('.course2')
  const $btnCourse3 = document.querySelector('.course3')
  const $tbody = document.querySelector('.tbody-assess')
  const $course1_content = document.querySelector('.course1-container')
  const $course2_content = document.querySelector('.course2-container')
  const $course3_content = document.querySelector('.course3-container')
  const $exitButtons = document.querySelectorAll('.exit')

  // Initialize hidden
  function hideAllCourses() {
    $course1_content.style.display = 'none'
    $course2_content.style.display = 'none'
    $course3_content.style.display = 'none'
  }

  hideAllCourses() // Close all tabs when it's initialize

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
