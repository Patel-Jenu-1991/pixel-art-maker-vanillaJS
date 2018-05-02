/*
    JavaScript Program for my Pixel Art App
    Author: Jaineshkumar Patel
    
    Credits:
    --------
    1. Team Udacity for providing the starter code
    2. www.cursor.cc for providing the cursor image
    
    I would like to bring to your notice that cursor.cc
    is itself an implementation of the pixel art app
    
    References:
    -----------
    MDN
    W3Schools
*/

// TODO: Select all the DOM elements to work with

// Select the color input
let colorInput = document.querySelector("#colorPicker");

// Select the #sizePicker form element
const sizePicker = document.querySelector("#sizePicker");
// the grid height number input element
const height = document.querySelector("#inputHeight");
// the grid width number input element
const width = document.querySelector("#inputWidth");

// Select the pixelCanvas
let pixCanvas = document.querySelector("#pixelCanvas");

// TODO: make the default grid
makeGrid();

// TODO: handle the submit event for our #sizePicker
sizePicker.addEventListener("submit", function(event) {
  // TODO: clear the grid
  clearGrid();
  // TODO: When size is submitted by the user, call makeGrid()
  makeGrid();
  // I don't want the form to clear up
  // the newly created grid so fast...
  event.preventDefault();
});

// TODO: delegate events for handling click events on our pixel canvas
pixCanvas.addEventListener("click", function(event) {
  // color a pixel when it has been clicked on
  colorPixel(event);
});

// Let me try to color with click and drag
// TODO: handle the mousedown event
pixCanvas.addEventListener("mousedown", function(event) {
  // TODO: handle the mousemove event...
  this.onmousemove = colorPixel(event);
});

// TODO: handle the mouseup event...
pixCanvas.addEventListener("mouseup", function(event) {
  // TODO: set object's onmousemove property to null
  this.onmousemove = null;
});

// TODO: erase on double click...
pixCanvas.addEventListener("dblclick", function(event) {
  // erase the pixel that was double clicked on
  erasePixel(event);
});

/**
 * TODO: write the colorPixel() function
 * @description Colors a table cell when it has been clicked on
 * @returns an anonymous function
 **/
function colorPixel(event) {
  // let me detect my target
  let target = event.target;
  // let me use my detected target to color it
  if (target && target.nodeName === "TD") {
    // let my target's target color be anything
    // the pixel artist would like
    target.style.background = colorInput.value;
  }

  return function(event) {
    colorPixel(event);
  };
}

/**
 * TODO: write a function to erase pixels that have been double clicked on
 * @description Erases a pixel when it has been double clicked on
 **/
function erasePixel(event) {
  // let me detect my target
  let target = event.target;
  // let me use my detected target to erase it
  if (target && target.nodeName === "TD") {
    // color the pixel white to erase it...
    target.style.background = "#fff";
  }
}

/**
 * TODO: write a function to clear the grid
 * @description Clears the grid
 **/
function clearGrid() {
  // while the number of rows are greater than 0
  // the loop continues with what it does best...
  while (pixCanvas.rows.length > 0) {
    // deletes the row at index 0 in our pixel canvas
    pixCanvas.deleteRow(0);
  }
}

/**
 * TODO: write the makeGrid function
 * @description Creates an N by M grid using input given by the user
 **/
function makeGrid() {
  // I've made use of type casting to convert user input
  // into a number

  // outer for loop iterates through the grid height
  for (let i = 0; i < Number(height.value); i++) {
    // inserts a new table row each time the outer loop runs
    let row = pixCanvas.insertRow(i);
    // inner for loop iterates through the grid width
    for (let j = 0; j < Number(width.value); j++) {
      // inserts a new table cell into the row,
      // for each iteration of the inner for loop
      row.insertCell(j);
    }
  }
}
