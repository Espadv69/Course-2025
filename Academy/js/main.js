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
        <button onclick="deleteEnrollments(${index})" class="delete">
          Delete enrollment
        </button>
      `
      ).join('')
  }
})
