let photos  = document.querySelectorAll ('.miniPhoto')
let photoBtn = document.querySelector('#btn')
let bigAva = document.querySelector ('.activeAva')
let activeBtn = document.querySelector('#activeBTn')
let body = document.querySelector('#body')
let slides =  Array.from(photos)
photoBtn.addEventListener ('click', (event) => {
    changeDisplay()
} )

activeBtn.addEventListener ('click', (event) => {
        changeDisplay()
       })

function changeDisplay () {
    bigAva.style.display = bigAva.style.display === '' ? 'flex' : ''
   }
  
//   document.addEventListener('click', () => {
//   }) 
   

//   bigAva.addEventListener('click', (event) => {
//     event.stopPropagation();
// }) 



// function rotatePhoto (arr) {
//     arr.forEach((item) => { if (arr.length == 3) {return item.style.width = '200px'
//     }
//     }) 
//  }
// rotatePhoto(slides)



// elem.onclick = function () {
//     changeDisplay()
// }





