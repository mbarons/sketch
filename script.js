const grid = document.querySelector(".grid");
const sizeButton = document.getElementById("size-btn");

createGrid()

sizeButton.addEventListener("click", () => {
    size = askSize();
    deleteGrid();
    createGrid(size);
})

function createGrid(size=16) {
    for (let i = 0; i < size; i++) {
        const line = document.createElement('div');
        line.setAttribute("class","line");
        grid.appendChild(line);
    
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.setAttribute("class","square");
            line.appendChild(square)
        }
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach((sq) => {
        sq.addEventListener("mouseover", () => sq.style.backgroundColor = "black")
    });
}

function askSize() {
    let size = window.prompt("Grid size: (max 100)")

    if (size > 100) {
        size = 100
    };

    return size;
}

function deleteGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
        console.log('removing a child');
    }
}