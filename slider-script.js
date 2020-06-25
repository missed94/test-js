
const sliderList = document.querySelector('.slider-list');
const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');

let moove = 0;



arrowRight.addEventListener('click', function(event) {
    event.preventDefault();
    moove = moove + 100; 
    if (moove > 500) {
        moove = 500;
    }
    sliderList.style.right = moove +'px';
});



arrowLeft.addEventListener('click', function(event) {
    event.preventDefault();
    moove = moove - 100; 
    if (moove < 0) {
        moove = 0;
    }
    sliderList.style.right = moove +'px';
});




