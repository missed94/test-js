const numbers = document.querySelector('.number-selector');
const colorSelector = document.querySelector('.color-selector'); 
const blocks = document.querySelector('.blocks'); 
 
numbers.addEventListener("change", function(e) {
  const number = e.target.value;

  let markup = '';

  for (let i = 0; i < number; i++) {
    const block = document.createElement("div");
    block.classList.add('block');
    block.innerText = i + 1;


    markup += block.outerHTML;
  }

  blocks.innerHTML = markup;
})


const colorTheBlock = (block, color) => {
  block.style.backgroundColor = color;
}


colorSelector.addEventListener("change", function(e) {
  const color = e.target.value;
  const items = blocks.querySelectorAll('.block');

  for (let i = 0; i < items.length; i++) {

    const blockNumber = i + 1;
    

    if (blockNumber % 2 != 0) {

      colorTheBlock(items[i], color);
    };
    
  }
});