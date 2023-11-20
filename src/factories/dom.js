const mainGameLoop = require('../factories/game');
const { player, ai } = mainGameLoop();

function loadHeader() {
    let headerContainer = document.createElement("div");
    headerContainer.id = "headerContainer";

    let header = document.createElement("h1")
    header.id = "header";
    header.textContent = "Battleship"

    headerContainer.appendChild(header);

    document.getElementById("content").appendChild(headerContainer);
}

function loadMain() {
    let mainContainer = document.createElement("div");
    mainContainer.id = "mainContainer";

    let boardContainer1 = document.createElement("div");
    boardContainer1.classList.add("boardContainer");

    let board1 = loadBoard(player.board, "board1");
    board1.id = "board1";

    let boardContainer2 = document.createElement("div");
    boardContainer2.classList.add("boardContainer");

    let board2 = loadBoard(ai.board, "board2");
    board2.id = "board2";

    let heading1 = document.createElement("h3");
    heading1.textContent = "Player Board";
    boardContainer1.appendChild(heading1);

    let heading2 = document.createElement("h3");
    heading2.textContent = "AI Board";
    boardContainer2.appendChild(heading2);

    boardContainer1.appendChild(board1);
    boardContainer2.appendChild(board2);

    mainContainer.appendChild(boardContainer1);
    mainContainer.appendChild(boardContainer2);

    document.getElementById("content").appendChild(mainContainer);
}

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
    aiAttack();
    checkWin();
}

function aiAttack() {
    const botMove = ai.computerSelection();
    const { row, col } = botMove;
    const cellElement = document.getElementById(`${"board1"}-${row}-${col}`);
    const attackedShip = player.board.board[row][col].shipInfo;

    if (botMove && player.board.receiveAttack(row, col)) {
        cellElement.classList.remove('cell-s');
        cellElement.classList.add('cell-h');
        cellElement.innerText = "⦿";

        for (let i = 0; i < attackedShip.surCells.length; i++) {
            ai.addCell(attackedShip.surCells[i], ai.prioCells);
        }

        if (attackedShip.sunk) {
            ai.prioCells.length = 0;      //clear cells
            updateSurroundingCells(attackedShip, "board1");
        }
    } else {
        cellElement.classList.remove('cell-n');
        cellElement.innerText = "○";
        cellElement.classList.add('cell-m');    
    }
}

function updateSurroundingCells(ship, boardId) {
    ship.surCells.forEach(cell => {
        const cellElement = document.getElementById(`${boardId}-${cell.row}-${cell.col}`);
        if (cellElement) {
            cellElement.innerText = "✘";
            cellElement.classList.add('clicked');

            if (boardId === 'board1') {
                ai.addCell({ row: cell.row, col: cell.col }, ai.occupiedSquares);
            }
        };
    });
}

function checkWin() {
    if (ai.board.allShipsSunk()) {
        setTimeout(() => {
            alert('You Win!');
        }, 1500);
    } else if (player.board.allShipsSunk()) {
        setTimeout(() => {
            alert('You Lose!');
        }, 1500);
    } else {
        return;
    }
}

function loadPage() {
    loadHeader();
    loadMain();
};

module.exports = loadPage;
