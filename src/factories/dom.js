function loadHeader() {
    let headerContainer = document.createElement("div");
    headerContainer.id = "headerContainer";

    let header = document.createElement("div")
    header.id = "header";
    header.innerText = "Battleship"

    headerContainer.appendChild(header);

    document.getElementById("content").appendChild(headerContainer);
}

function loadMain() {
    let mainContainer = document.createElement("div");
    mainContainer.id = "mainContainer";

    let board1 = loadBoard(10);    
    board1.id = "board1";  

    let board2 = loadBoard(10);
    board2.id = "board2";  

    mainContainer.appendChild(board1);
    mainContainer.appendChild(board2);

    document.getElementById("content").appendChild(mainContainer);
}

function loadBoard(j) {
    let grid = document.createElement("div");
    grid.classList.add("grid");

    for(let i = 0; i < j; i++) {
        var row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for(let k = 0; k < j; k++) {
            var cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
    return grid;
}

function loadPage() {
    loadHeader();
    loadMain();
}

module.exports = loadPage;
