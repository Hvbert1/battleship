const mainGameLoop = require('../factories/game');
const { player, ai } = mainGameLoop();


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

    let board1 = loadBoard(player.board, "board1");    
    board1.id = "board1";  

    let board2 = loadBoard(ai.board, "board2");
    board2.id = "board2";  

    mainContainer.appendChild(board1);
    mainContainer.appendChild(board2);

    document.getElementById("content").appendChild(mainContainer);
};

function loadBoard(board, id) {
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
            cell.id = `${id}-${i}-${j}`;
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
    const [board, row, col] = cellId.split('-');

    if (cell.classList.contains('clicked')) {
        return;
    }

    if (ai.board.receiveAttack(row, col)) {
        cell.classList.remove('cell-s');
        cell.classList.add('cell-h');
        cell.innerText = "⦿";
        const attackedShip = ai.board.board[row][col].shipInfo;
        if (attackedShip.sunk) {
            updateSurroundingCells(attackedShip, "board2");
        }
    } else {
        cell.classList.remove('cell-n');
        cell.innerText = "○";
        cell.classList.add('cell-m');
    }
    cell.classList.add('clicked');
    checkWin();
}

function updateSurroundingCells(ship, boardId) {
    ship.surCells.forEach(cell => {
        const cellElement = document.getElementById(`${boardId}-${cell.row}-${cell.col}`);
        if (cellElement) {
            cellElement.innerText = "✘";
        }
    });
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
