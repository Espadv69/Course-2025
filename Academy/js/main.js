window.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const $form = document.querySelector('.form-enrollments')
  const $savedDataContainer = document.querySelector('.saved-data')

  // Function to load and display saved enrollments from localstorage
  function loadSavedData() {
    const enrollments = JSON.parse(localStorage.getItem('enrollments')) || [] // Initialize as empty array
    $savedDataContainer.innerHTML = enrollments
      .map(
        (data, index) =>
          `
        <p>Full Name: <strong>${data.name} ${data.lastname}</strong></p>
        <p>Degrees: <strong>${data.degree}</strong></p>
        <button onclick="deleteEnrollment(${index})" class="delete">
          Delete enrollment
        </button>
      `
      )
      .join('')
  }

  // Handle form submit
  $form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData($form).entries()) // Get form data
    const enrollments = JSON.parse(localStorage.getItem('enrollments')) || []
    enrollments.push(formData) // Add new enrollment
    localStorage.setItem('enrollments', JSON.stringify(enrollments)) // Saved to localstorage
    $form.reset() // Clear form
    loadSavedData()
  })

  // Function to delete an enrollment
  window.deleteEnrollmen = (index) => {
    const enrollments = JSON.parse(localStorage.getItem('enrollments')) || []
    enrollments.splice(index, 1) // Remove selected item
    localStorage.setItem('enrollments', JSON.stringify(enrollments)) // Update localstorage
    loadSavedData() // Refresh
  }

  loadSavedData() // Load when the page init
})
