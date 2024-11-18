brushColor = "#ff0000";
let mode = "rainbow";

function clearGrid(){
    grid = document.getElementById("gridContainer")
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}



function drawGrid(size) {
    row = size;
    col = size;
    const x = document.getElementById("gridContainer");
    let result = getComputedStyle(x);
    let windowSize = result.getPropertyValue("width");
    console.log(windowSize);
    let gridSize = parseInt(windowSize) / size;

    const grid = document.getElementById("gridContainer");
    const gridChild = document.createElement("div");
    gridChild.classList.add("gridCol");
    gridChild.style.height = gridSize + "px";
    gridChild.style.width = gridSize + "px";
    // gridChild.setAttribute("draggable", false);
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    // gridRow.setAttribute("draggable", false)

    for (i = 0; i < col; i++){
        gridRow.appendChild(gridChild.cloneNode());
    }

    for (i = 0; i < row; i++){
        grid.appendChild(gridRow.cloneNode(true));
    }

    checkMouse();
}

function checkMouse() {
    const grid = document.getElementsByClassName("gridCol");
    for (const item of grid) {
        item.addEventListener("mouseover", e => {
            // console.log(e);
            console.log(mode);
            if (mode === 'rainbow') {
                brushColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
                item.style.backgroundColor = brushColor;
            }
            else if (mode === 'fixed') {
                item.style.backgroundColor = brushColor;
            }
            
        })
    }
}

function rainbowMode(){
    mode = 'rainbow';
    // brushColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
}

function colorSelector(color){
    brushColor = color.value;
    mode = "fixed";
    console.log(brushColor);
}

function gridRange(){
    let slider = document.getElementById("slider");
    let output = document.getElementById("size");

    slider.oninput = () => {
        output.innerHTML = slider.value + ' x ' + slider.value;
        console.log(slider.value);
        return slider.value;
    }
}

gridSize = 16;
gridSize = gridRange();
