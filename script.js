// let gridSize = prompt("Enter the grid size(i.e. 1-64): ");
let gridSize = 16;
let getColor = "black";

function getRandomColor() {
    // copied from tutorials point link "https://www.tutorialspoint.com/random-color-generator-in-javascript"
    let makeColorCode = '0123456789ABCDEF';
    let code = '#';
    for (var count = 0; count < 6; count++) {
        code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
}

// function randomColor(){
//     color = getRandomColor();
//     let styles = `.random-color{
//         background-color: ${color};
//     }`;
//     return styles;
// }

//create a grid of given size
function createGridElement() {
    const gridElement = document.createElement("div");
    gridElement.classList.add("item");
    return gridElement;
}

//get the .grid-container element and append grid items in it
const gridContainer = document.querySelector("#grid-container");

// gridContainer.style.grid-template-rows = gridSize;
gridContainer.setAttribute("style", `grid-template-rows: repeat(${gridSize},1fr);;`)
gridContainer.setAttribute("style", `grid-template-columns: repeat(${gridSize},1fr);`)

for (let index = 0; index < gridSize * gridSize; index++) {
    gridContainer.appendChild(createGridElement());
}

// when the mouse is hovered over grid fill the grid items
const mouseClicked = document.querySelectorAll(".item");
for (let index = 0; index < mouseClicked.length; index++) {
    mouseClicked[index].addEventListener("mouseenter", function () {
        // mouseClicked[index].classList.add("clicked");
        mouseClicked[index].setAttribute("style",`background-color: ${getColor};`);
    });
}

//color mode
const colorMode = document.querySelector("#colorMode");
colorMode.addEventListener("click", function () {
    for (let index = 0; index < mouseClicked.length; index++) {
        mouseClicked[index].addEventListener("mouseenter", function () {
            mouseClicked[index].setAttribute("style",`background-color: ${getColor};`);
            // mouseClicked[index].classList.add("clicked");
        });
    }
})


//eraser to erase one grid item
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", function () {
    //statement to change the background color of that grid item 
    for (let index = 0; index < mouseClicked.length; index++) {
        mouseClicked[index].addEventListener("mouseenter", function () {
            // mouseClicked[index].classlist.remove("colored");
            mouseClicked[index].setAttribute("style","background-color: white;");
        });
    }
});

//function to clear all grid items
const clear = document.querySelector("#clear");
clear.addEventListener("click", function () {
    //statement to change the background color of every grid item to white
    for (let index = 0; index < mouseClicked.length; index++) {
        // mouseClicked[index].classList.remove("clicked");
        mouseClicked[index].setAttribute("style","background-color: #ffffff;");
    }
    
    //after clearing it will make it so that when mose hovers overs it it draws
    for (let index = 0; index < mouseClicked.length; index++) {
        mouseClicked[index].addEventListener("mouseenter", function () {
            // mouseClicked[index].classList.add("clicked");
            mouseClicked[index].setAttribute("style",`background-color: ${getColor};`);
        });
    }
});

//makes every pixel random color
const rainbowMode = document.querySelector("#rainbowMode");
rainbowMode.addEventListener("click", function () {
    // if (randomMode){
    //statement to randomize the color every time the mouse moves from one grid item to another
    //after clearing it will make it so that when mouse hovers overs it it draws
    for (let index = 0; index < mouseClicked.length; index++) {
        mouseClicked[index].addEventListener("mouseenter", function () {
            // copied from tutorials point link "https://www.tutorialspoint.com/random-color-generator-in-javascript"
            let makeColorCode = '0123456789ABCDEF';
            let code = '#';
            for (var count = 0; count < 6; count++) {
                code = code + makeColorCode[Math.floor(Math.random() * 16)];
            }
            mouseClicked[index].setAttribute("style", `background-color: ${code};`)
        });
    }
    // }
});