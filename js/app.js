// Select color and size input and pixel canvas

const colorPicker = document.querySelector('#colorPicker');
const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');

//---------------------------------------

sizePicker.addEventListener('submit', function(event) {
  //prevent the page from reloading
  event.preventDefault();
  
  // Select size input
  let heightSelector = document.querySelector('#inputHeight');
  let widthSelector = document.querySelector('#inputWidth');
  
  let gridHeight = parseInt(heightSelector.value);
  let gridWidth = parseInt(widthSelector.value);
  
  //use the call to makeGrid() to make the table
  pixelCanvas.innerHTML = makeGrid(gridHeight, gridWidth);
});

function changeColor(evt) {
  
  evt.preventDefault();
  
  if (evt.target.hasAttribute('style')) {
    evt.target.removeAttribute('style');
  } else {
    evt.target.style.backgroundColor = colorPicker.value;
  }
  
}

pixelCanvas.addEventListener('click', changeColor);


function makeGrid(height, width) {
  
  let pixelCanvas = document.querySelector('#pixelCanvas');
  pixelCanvas.innerHTML = '';
  
  //to create a new row until the grid has the correct height
  for (let h = 0; h < height; h += 1) {
    pixelCanvas.appendChild(document.createElement('tr'));
  }
  
  let rows = document.querySelectorAll('tr');
  
  rows.forEach(function(row) {
    for (let w = 0; w < width; w++) {
      let newCell = document.createElement('td');
      row.appendChild(newCell);
      
    }
  });
  
  return pixelCanvas.innerHTML;
}