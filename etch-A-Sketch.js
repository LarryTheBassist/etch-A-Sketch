//create container for sketchpad
const gridContainer = document.createElement('div');
gridContainer.classList.add('container');



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
        container.appendChild(newDiv);
    };
};


setUpGrid(16, gridContainer);
document.body.appendChild(gridContainer);