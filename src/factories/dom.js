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

            if (board.board[i][j].shipInfo !== null) {
                cell.id = 'cell-s';
            } else {
                cell.id = 'cell-n'
            }
            cell.classList.add('cell');

            cell.innerText = i;
            row.appendChild(cell);
        }
    }
    return grid;
};

function loadPage() {
    loadHeader();
    loadMain();
};

module.exports = loadPage;
