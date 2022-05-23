let windowHeight = window.innerHeight;
let translateDiv = document.querySelector('.translate-div')
let nextButton = document.querySelector('.button-next a')
let prevButton = document.querySelector('.button-prev a')
let slides = document.querySelectorAll('.section')
let variableNumber = document.querySelector('.number-variable')
let buttons = document.querySelectorAll('button')
// Setting up main variable


// Setting up numbers for slide
let idx = 0;

variableNumber.innerHTML = `01`;

function changeImage() {
    if(idx > slides.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = slides.length - 1
    }

    translateDiv.style.transform = `translateY(${-idx * windowHeight}px)`
};

// Setting up Button Listerners
nextButton.addEventListener('click', moveForward);
prevButton.addEventListener('click', movePrevious);


// Button function
function moveForward() {
    idx++
    changeImage()
    variableNumber.innerHTML = `0${idx + 1}`
};

function movePrevious() {
    idx--
    changeImage()
    variableNumber.innerHTML = `0${idx + 1}`
};

// Use Buttons to open model description
buttons.forEach((button) => {
let infoContainer = button.parentElement.previousElementSibling.getElementsByClassName('model-description')[0];


button.addEventListener('click', () => {
 console.log(infoContainer)
 if (infoContainer.style.left === "-100%") {
        infoContainer.style.left = "0";
      } else {
        infoContainer.style.left = "-100%";
      }
})
});
