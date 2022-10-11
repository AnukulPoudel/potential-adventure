// let gridSize = prompt("Enter the grid size(i.e. 1-64): ");
let gridSize = 16;


//create a grid of given size
function createGridElement(){
    const gridElement = document.createElement("div");
    gridElement.classList.add("item");
    return gridElement;
}

//get the .grid-container element and append grid items in it
const gridContainer = document.querySelector("#grid-container");

// gridContainer.style.grid-template-rows = gridSize;
gridContainer.setAttribute("style",`grid-template-rows: repeat(${gridSize},1fr);;`)
gridContainer.setAttribute("style",`grid-template-columns: repeat(${gridSize},1fr);`)

for (let index = 0; index < gridSize*gridSize; index++) {
    gridContainer.appendChild(createGridElement());
}

// when the mouse is hovered over grid fill the grid items
const mouseClicked = document.querySelectorAll(".item");
for (let index = 0; index < mouseClicked.length; index++) {
    mouseClicked[index].addEventListener("mouseenter",function(){
        mouseClicked[index].classList.add("clicked");
    });
}

//makes every pixel random color
const rainbowMode = document.querySelector("#rainbowMode");
rainbowMode.addEventListener("click",function(){
    //statement to randomize the color every time the mouse moves from one grid item to another
});

//eraser to erase one grid item
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click",function(){
    //statement to change the background color of that grid item 
    for (let index = 0; index < mouseClicked.length; index++) {
        mouseClicked[index].addEventListener("mouseenter",function(){
            mouseClicked[index].classList.remove("clicked");
        });
    }
});

//function to clear all grid items
const clear = document.querySelector("#clear");
clear.addEventListener("click",function(){
    //statement to change the background color of every grid item to white
    for (let index = 0; index < mouseClicked.length; index++) {
        mouseClicked[index].classList.remove("clicked");
    }
});
