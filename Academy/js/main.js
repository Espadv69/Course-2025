window.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const $form = document.querySelector('.form-enrollments')
  const $savedDataContainer = document.querySelector('.saved-data')

  // Function to load and display saved enrollments from localstorage
  function loadSavedData() {
    const enrollments = JSON.parse(localStorage.getItem('enrollments')) || [] // Initialize as empty array
    if (enrollments.length === 0) {
      $savedDataContainer.innerHTML =
        '<p class="p-noenrollments">No enrollments found</p>'
      return
    }

    $savedDataContainer.innerHTML = enrollments
      .map(
        (data, index) =>
          `
        <div class="data-saved-content">
          <p>Full Name: <strong>${data.name} ${data.lastname}</strong></p>
          <p>Degrees: <strong>${data.degrees}</strong></p>
          <button onclick="deleteEnrollment(${index})" class="delete">
            Delete enrollment
          </button>
        </div>
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
  window.deleteEnrollment = (index) => {
    const enrollments = JSON.parse(localStorage.getItem('enrollments')) || []
    enrollments.splice(index, 1) // Remove selected item
    localStorage.setItem('enrollments', JSON.stringify(enrollments)) // Update localstorage
    loadSavedData() // Refresh
  }

  loadSavedData() // Load when the page init
})
