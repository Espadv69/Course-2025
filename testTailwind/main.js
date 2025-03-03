const $containers = document.querySelector('#containers')
const $addContainerBtn = document.querySelector('#add')

$addContainerBtn.addEventListener('click', () => {
  const $divContainer = document.createElement('div')
  $divContainer.classList.add('bg-blue-600', 'size-[300px]')
  // $divContainer.style.width = '200px'
  // $divContainer.style.height = '200px'
  // $divContainer.style.backgroundColor = '#0066ff'

  $containers.appendChild($divContainer)
  console.log('container create')
})
