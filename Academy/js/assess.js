window.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const $tbody = document.querySelector('.tbody-assess')
  const $exitButtons = document.querySelectorAll('.exit')
  const $addButtons = document.querySelectorAll('.add')

  // Mapea los botones de los cursos a sus respectivos contenedores
  const courseButtons = {
    '.course1': '.course1-container',
    '.course2': '.course2-container',
    '.course3': '.course3-container',
  }

  // Función para ocultar todos los cursos
  function hideAllCourses() {
    Object.values(courseButtons).forEach((selector) => {
      document.querySelector(selector).style.display = 'none'
    })
  }

  hideAllCourses() // Ocultar todos los cursos al inicio

  // Agregar evento a los botones de curso para mostrar el curso correspondiente
  Object.entries(courseButtons).forEach(([buttonClass, containerSelector]) => {
    document.querySelector(buttonClass).addEventListener('click', () => {
      hideAllCourses()
      document.querySelector(containerSelector).style.display = 'block'
    })
  })

  // Cerrar cursos cuando se haga clic en "Exit"
  $exitButtons.forEach((button) => {
    button.addEventListener('click', hideAllCourses)
  })

  // Función para agregar información a la tabla
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

    // Crear una nueva fila
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${courseName}</td>
      <td>${hours}</td>
      <td>-</td>
    `

    // Agregar la fila al tbody de la tabla
    $tbody.appendChild(row)
  }

  // Agregar eventos a los botones "Add to Table"
  $addButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
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
