const createBoard = require('../factories/createBoard');
const mainGameLoop = require('../factories/game');


function loadHeader() {
    let headerContainer = document.createElement("div");
    headerContainer.id = "headerContainer";

    let header = document.createElement("div")
    header.id = "header";
    header.innerText = "Battleship"

    headerContainer.appendChild(header);

    document.getElementById("content").appendChild(headerContainer);
}


const { player, ai } = mainGameLoop();

function loadMain() {
    let mainContainer = document.createElement("div");
    mainContainer.id = "mainContainer";

    let board1 = loadBoard(player.board);    
    board1.id = "board1";  

    let board2 = loadBoard(ai.board);
    board2.id = "board2";  

    mainContainer.appendChild(board1);
    mainContainer.appendChild(board2);

    document.getElementById("content").appendChild(mainContainer);
};

function loadBoard(board) {
    let grid = document.createElement("div");
    grid.classList.add("grid");

    for (let i = 0; i < board.board.length; i++) {
        var row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for(let j = 0; j < board.board.length; j++) {
            var cell = document.createElement('div');
            cell.classList.add('cell');

            if (board.board[i][j].shipInfo !== null) {
                cell.classList.add('cell-s');
            } else {
                cell.classList.add('cell-n');
            }
            cell.id = `${i}-${j}`;
            cell.innerText = `${i}-${j}`;
            cell.addEventListener('click', handleClick);
            row.appendChild(cell);
        }
    }
    return grid;
};

function handleClick(event) {
    const cell = event.target;
    const cellId = cell.id;
    const [row, col] = cellId.split('-');

    if (cell.classList.contains('clicked')) {
        return;
    }

    console.log(`Clicked on cell at row ${row}, column ${col}`);
    if (ai.board.receiveAttack(row, col)) {
        cell.classList.remove('cell-s');
        cell.classList.add('cell-h');
        cell.classList.add('clicked');
        console.log('Attack hit!');
    } else {
        console.log('Attack missed');
        cell.classList.remove('cell-n');
        cell.classList.add('cell-m');
        cell.classList.add('clicked');
    }

    checkWin();
}

function checkWin() {
    if (ai.board.allShipsSunk()) {
        alert('You Win!');
    } else if (player.board.allShipsSunk()) {
        alert('You lose!');
    } else {
        return;
    }
}

function loadPage() {
    loadHeader();
    loadMain();
};

module.exports = loadPage;
