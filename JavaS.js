let photos  = document.querySelectorAll ('.miniPhoto')
let slides =  Array.from(photos)
let photoBtn = document.querySelector('#btn')
// slides.push(photoBtn)
let hidePhoto = document.querySelector ('.hidePhoto')
let activeBtn = document.querySelector('#activeBTn')
let body = document.querySelector('#body')
let prevButn = document.querySelector('.prev')
let nextButn = document.querySelector('.next')
let cover = document.querySelector('.cover')
let i = 0

photoBtn.addEventListener ('click', () => {
    document.photoBtn = document.querySelector('#btn')
    activeSlides ()
    } 
)

slides.forEach(index=> index.addEventListener('click', (event) => {
i = event.currentTarget.dataset.id
slides[i].classList.toggle('photo_img'), slides[i].classList.toggle('activeAva')
prevButn.style.display = 'block'
nextButn.style.display = 'block'
document.querySelector('.cover').classList.add('cover_show')
}
)
)

function activeSlides () {
   hidePhoto.classList.add('activeAva')
   prevButn.style.display = 'block'
   nextButn.style.display = 'block'
   document.querySelector('.cover').classList.add('cover_show')
  }

prevButn.addEventListener('click', () => {
  mCounter (slides)
 })

nextButn.addEventListener('click', () => {
   pCounter(slides)
})



function pCounter (slides) {
   slides[i].classList.toggle('photo_img'), slides[i].classList.toggle('activeAva')
   i++
   if (i >= slides.length ) {
    i = 0 
    return slides[i].classList.remove('photo_img'), slides[i].classList.toggle('activeAva')
    } else  {
    return slides[i].classList.remove('photo_img'), slides[i].classList.toggle('activeAva')
  } 
}

 function mCounter(slides) {
  slides[i].classList.toggle('photo_img'), slides[i].classList.toggle('activeAva')
  i--
  if (i < 0) {
  i = slides.length -1
  return slides[i].classList.toggle('photo_img'), slides[i].classList.toggle('activeAva')
  } 
  else if (slides[i] !== i) {
  return slides[i].classList.toggle('activeAva'), slides[i].classList.remove('photo_img')
   } 
}

  cover.addEventListener ('click', () => {
  slides.forEach(item => item.classList.remove('activeAva')),
  slides.forEach(item => item.classList.add('photo_img')), 
  cover.classList.remove('cover_show'),
  prevButn.style.display = '',
  nextButn.style.display = '',
  hidePhoto.classList.remove('photo_img'),
  hidePhoto.classList.remove('activeAva'),
  i = 0
})
