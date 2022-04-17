let windowHeight = window.innerHeight;
let translateDiv = document.querySelector('.translate-div')
let nextButton = document.querySelector('.button-next a')
let prevButton = document.querySelector('.button-prev a')
let slides = document.querySelectorAll('.section')

// Setting up main variable
let idx = 0;


console.log(slides, prevButton, nextButton)

function changeImage() {
    if(idx > slides.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = slides.length - 1
    }

    translateDiv.style.transform = `translateY(${-idx * windowHeight}px)`
}


nextButton.addEventListener('click', moveForward)
prevButton.addEventListener('click', movePrevious)


function moveForward() {
    idx++
    changeImage()
    console.log('click')
}

function movePrevious() {
    idx--
    changeImage()
    console.log('click')

}
