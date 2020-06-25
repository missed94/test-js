const btn = document.querySelector('.btn');
const overLayWrapper = document.querySelector('.overlay-wrapper');
/* const overLay = document.querySelector('.overlay'); */
/* const closeBtn = document.querySelector('.close'); */



btn.addEventListener ("click", function(event) {
    event.preventDefault();
    /* overLay.style.display = 'flex'; */
    
    const overLay = document.createElement('div');
    overLayWrapper.appendChild(overLay);
    overLay.classList.add('overlay');

    const modalContainer = document.createElement('div');
    overLay.appendChild(modalContainer);
    modalContainer.classList.add('modal-container');

    const closeBtn = document.createElement('a');
    modalContainer.appendChild(closeBtn);
    closeBtn.classList.add('close');
    closeBtn.textContent = 'x';

    const modalContent = document.createElement('div');
    modalContainer.appendChild(modalContent);
    modalContent.classList.add('modal-content');
    modalContent.textContent = 'Hello World!';

    closeBtn.addEventListener ("click", function(event) {
        event.preventDefault();
        /* overLay.style.display = 'none'; */
        overLayWrapper.removeChild(overLay);
    });
    
    overLay.addEventListener("click", function(event) {
        event.preventDefault();
        overLayWrapper.removeChild(overLay);
    })

});




