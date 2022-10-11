// let gridSize = prompt("Enter the grid size(i.e. 1-64): ");
let gridSize = 8;

//create a grid of given size
function createGridElement(){
    let gridElement = document.createElement("div");
    gridElement.classList.add("item");
    return gridElement;
}

//get the .grid-container element
let gridContainer = document.querySelector("#grid-container");
for (let index = 0; index < gridSize*gridSize; index++) {
    gridContainer.appendChild(createGridElement());
}

let mouseClicked = document.querySelectorAll(".item");
for (let index = 0; index < mouseClicked.length; index++) {
    mouseClicked[index].addEventListener("mousemove",function(){
        mouseClicked[index].classList.add("clicked");
    });
    
}
