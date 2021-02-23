//create container for sketchpad
const gridContainer = document.createElement('div');
gridContainer.classList.add('container');


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
        //add event listener to each div
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

setUpGrid(16, gridContainer);
document.body.appendChild(gridContainer);