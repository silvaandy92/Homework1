const pics = [
  'imgs/kitty_bed.jpg', // 0
  'imgs/kitty_basket.jpg', // 1
  'imgs/kitty_laptop.jpg', // 2
  'imgs/kitty_door.jpg', //3
  'imgs/kitty_sink.jpg', // 4
  'imgs/kitty_wall.jpg', // 5
]

const button = document.querySelector('button')
const img = document.querySelector('img')

let showIndex = 0
button.addEventListener('click', function() {
  if (showIndex === 6) {
    showIndex = 0
  }
  img.src = pics[showIndex]
  showIndex = showIndex + 1
})
