document.querySelector('.navbar').innerHTML = fetch('includes/navbar.html')
  .then((response) => response.text())
  .then((data) => (document.querySelector('.navbar').innerHTML = data))
  .catch((e) => console.log('There was an error', e.message))
