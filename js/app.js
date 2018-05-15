// Select color input
const colorPicker = document.querySelector('#colorPicker');
const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');

//---------------------------------------

sizePicker.addEventListener('submit', function(event) {
  //prevent the page from reloading
  console.log('submit event triggered!');
  event.preventDefault();
  
  // Select size input
  let heightSelector = document.querySelector('#inputHeight');
  let widthSelector = document.querySelector('#inputWidth');
  
  let gridHeight = parseInt(heightSelector.value);
  let gridWidth = parseInt(widthSelector.value);
  
//   let pixelCanvas = document.querySelector('#pixelCanvas');
  
  //use the call to makeGrid() to make the table
  pixelCanvas.innerHTML = makeGrid(gridHeight, gridWidth);
});

function respondToTheClick(evt) {
  
  function changeColor(cell) {

    // Select color input
    const colorPicker = document.querySelector('#colorPicker');

    let color = colorPicker.value;
    console.log(color);

    //if the cell is already "colored in", remove the color
    if (cell.attr('style')) {
      cell.removeAttr('style');

      //if the cell has no color, add the color currently selected
    } else {
      cell.attr('style', 'background-color:' + color);

    }
  }
  console.log('cell clicked');
  evt.preventDefault();
  
  
  changeColor(evt.target);
}

pixelCanvas.addEventListener('click', respondToTheClick);


//function to change the color of the cell
function changeColor(cell) {

  let color = colorPicker.value;
  console.log(color);
  
  //if the cell is already "colored in", remove the color
  if (cell.attr('style')) {
    cell.removeAttr('style');
  
  //if the cell has no color, add the color currently selected
  } else {
    cell.attr('style', 'background-color:' + color);
  
  }
}

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
