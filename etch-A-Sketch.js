//create container for sketchpad
const gridContainer = document.createElement('div');
gridContainer.classList.add('container');
let num = 16;


//catchall grid render
function setUpGrid(num, container){
    setUpContainer(num, container);
    addDivs(num, container);
};
//set up container using funcion
function setUpContainer(num, container) {
    container.setAttribute("style", `grid-template-columns: repeat(${num}, 1fr)`);
};
//create correct number of divs using function and add to grid
function addDivs(num, container) {
    container.innerHTML = '';
    let divNum = num * num;
    for (let i = 0; i < divNum; i++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute("id", `${i}`);
        addMouseover(newDiv);
        container.appendChild(newDiv);
    };
};

//add event listener to each div
function addMouseover(div) {
    div.addEventListener("mouseover", function() {
        this.setAttribute("style", "background-color: black");
    })
}

setUpGrid(num, gridContainer);

//add button to clear grid
const clearGridButton = document.createElement("button");
clearGridButton.textContent = "Clear Grid";
clearGridButton.addEventListener("click", clearGrid);

function clearGrid() {
    setUpGrid(num, gridContainer);
}

const changeResolutionBtn = document.createElement("button");
changeResolutionBtn.textContent = "Change Resolution";
changeResolutionBtn.addEventListener("click", ()=> {
    clearGrid();
    let num = prompt("How many squares per side do you want?");
    setUpGrid(num, gridContainer);
})

document.body.appendChild(clearGridButton);
document.body.appendChild(changeResolutionBtn);
document.body.appendChild(gridContainer);