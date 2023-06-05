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

var startX
var startY
var swipeThreshold = 50

document
  .querySelector('.mobile-overlay')
  .addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX
    startY = event.touches[0].clientY
    // console.log(startX)
  })

document
  .querySelector('.mobile-overlay')
  .addEventListener('touchmove', function (event) {
    var currentX = event.touches[0].clientX
    var currentY = event.touches[0].clientY
    var diffX = currentX - startX
    var diffY = currentY - startY
    // console.log(diffX)
    // console.log(diffY)

    if (Math.abs(diffX) > Math.abs(diffY) && diffX > swipeThreshold) {
      document
        .querySelector('.mobile-overlay')
        .classList.remove('show-mobile-overlay')
    }
  })
