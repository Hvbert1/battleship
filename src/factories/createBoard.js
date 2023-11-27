const createBoard = () => {
    const boardSize = 10;
    const board = [];
    const missedShots = []


    function initializeBoard() {
        for (let i = 0; i < boardSize; i++) {
            const row = [];
            for (let j = 0; j < boardSize; j++) {
                const cell = { row: i, col: j, shipInfo: null };
                row.push(cell);
            }
            board.push(row);
        }
    };

    function placeShip (ship, row, col, isHor) {
        const result = checkSurroundingCell(ship, row, col, isHor);
        const maxHor = Number(col) + Number(ship.length - 1);
        const maxVert = Number(row) + Number(ship.length - 1);

        if ((isHor && maxHor < boardSize || !isHor && maxVert < boardSize) && result.success ) {      // check if surrounding cells pass && if ship is within board
            ship.surCells = result.surCells;    // append surrounding to ship

            for (let i = 0; i < ship.length; i++) {
                if (isHor) {
                    board[row][col].shipInfo = ship;
                    col++;
                } else {
                    board[row][col].shipInfo = ship;
                    row++;
                }
            }
        } else {
            throw new Error("Ship placement is invalid");
        }
    };

    function checkSurroundingCell(ship, row, col, isHor) {
        let curRow, curCol;
        let surCells = [];
    
        for (let i = 0; i < ship.length; i++) {
            for (let ni = -1; ni <= 1; ni++) {      //loops from -1 to 1 checking all surrounding cells
                for (let nj = -1; nj <= 1; nj++) {
                    curRow = Number(row) + ni;
                    curCol = Number(col) + nj;

                    if (curRow >= 0 && curRow < boardSize && curCol >= 0 && curCol < boardSize) { 
                        if (!surCells.find((cell) => cell.row === curRow && cell.col === curCol)) {     //check for duplicate cells being added
                            if (board[curRow][curCol].shipInfo !== null) {
                                return { success: false };
                            }
                            surCells.push({ row: curRow, col: curCol });
                        }
                    }
                }
            }
            if (isHor) {
                col++;
            } else {
                row++;
            }
        }
        return { success: true, surCells };
    };

    const receiveAttack = function(row, col) {
        const cellAttack = board[row][col];

        if (cellAttack.shipInfo !== null) {
            cellAttack.shipInfo.hit();
            return true;
        } else {
            missedShots.push({ row: row, col: col })
            return false;
        }
    };

    const allShipsSunk = function() {
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                if (board[i][j].shipInfo !== null && !board[i][j].shipInfo.sunk) {
                    return false;
                }
            }
        }
        return true;
    };

    function displayShip(ship, row, col, isHor) {
        let result = checkSurroundingCell(ship, row, col, isHor);
        let maxHor = Number(col) + Number(ship.length - 1);
        let maxVert = Number(row) + Number(ship.length - 1);

        if ((isHor && maxHor < boardSize || !isHor && maxVert < boardSize) && result.success) {
            const tempSurCells = result.surCells;

            for (let i = 0; i < ship.length; i++) {
                let cellId = `${row}-${col}`;
                let cellElement = document.getElementById("board1-" + cellId);

                cellElement.classList.add('drag-over'); // Add a class to indicate the presence of the ship

                if (isHor) {
                    col++;
                } else {
                    row++;
                }
            }
            return tempSurCells;
        } else {
            throw new Error("Ship placement is invalid to display");
        }
    };

    initializeBoard();
    
    return {
        board,
        missedShots,
        placeShip,
        receiveAttack,
        displayShip,
        allShipsSunk,
    };
};

module.exports = createBoard;

