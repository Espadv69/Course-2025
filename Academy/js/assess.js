window.addEventListener('DOMContentLoaded', () => {
  //DOM elements
  const $btnCourse1 = document.querySelector('.course1')
  const $btnCourse2 = document.querySelector('.course2')
  const $btnCourse3 = document.querySelector('.course3')
  const $tbody = document.querySelector('.tbody-assess')
  const $course1_content = document.querySelector('.course1-container')
  const $course2_content = document.querySelector('.course2-container')
  const $course3_content = document.querySelector('.course3-container')

  // Initialize hidden
  $course1_content.style.display = 'none'
  $course2_content.style.display = 'none'
  $course3_content.style.display = 'none'

  $btnCourse1.addEventListener('click', () => {
    $course1_content.style.display = 'block'
  })

  $btnCourse2.addEventListener('click', () => {
    $course2_content.style.display = 'block'
  })

  $btnCourse3.addEventListener('click', () => {
    $course3_content.style.display = 'block'
  })
})
