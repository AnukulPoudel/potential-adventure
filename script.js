// let gridSize = prompt("Enter the grid size(i.e. 1-64): ");
let gridSize = 8;

//create a grid of given size
function createGridElement(){
    let gridElement = document.createElement("div");
    gridElement.className = "item";
    gridElement.onmousedown = ;
    return gridElement;
}

function clicked(){
    colorPicker. //needs to be completed
}

//get the .grid-container element
let gridContainer = document.querySelector("#grid-container");
for (let index = 0; index < gridSize*gridSize; index++) {
    gridContainer.appendChild(createGridElement());
}


// when the mouse hovers above it color it using
// document.getElementById("div1").className= "newClass";

const colorPicker = document.querySelector("#color-picker");
colorPicker.addEventListener("click",clicked());

