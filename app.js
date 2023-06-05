const date = document.querySelector('#date')

let dates = new Date().getFullYear()

date.textContent = dates

const mobileBar = document.querySelector('.mobile-bar')
const mobileOverlay = document.querySelector('.mobile-overlay')
const closeBar = document.querySelector('.close-bar')
mobileBar.addEventListener('click', () => {
  mobileOverlay.classList.add('show-mobile-overlay')
})

closeBar.addEventListener('click', () => {
  mobileOverlay.classList.remove('show-mobile-overlay')
})
