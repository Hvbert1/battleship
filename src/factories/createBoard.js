const createBoard = () => {
    const boardSize = 10;
    const board = [];
    const missedShots = []

    for (let i = 0; i < boardSize; i++) {
        const row = [];
        for (let j = 0; j < boardSize; j++) {
            const cell = {
                row: i,
                col: j,
                shipInfo: null,
            };
            row.push(cell);
        }
        board.push(row);
    };

    const placeShip = function (ship, row, col, isHor) {
        const result = checkSurroundingCell(ship, row, col, true);

        if (result.success) {
            ship.surCells = result.surCells;

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
            throw new Error("Ship placement is out of bounds");
        }
    };

    function checkSurroundingCell(ship, row, col, isHor) {
        let curRow = 0;
        let curCol = 0;
        let surCells = [];
    
        for (let i = 0; i < ship.length; i++) {
            for (let ni = -1; ni <= 1; ni++) {
                for (let nj = -1; nj <= 1; nj++) {
                    curRow = row + ni;
                    curCol = col + nj;
                    if (curRow >= 0 && curRow < board.length && curCol >= 0 && curCol < board.length) {
                        surCells.push({ row: curRow, col: curCol });
                        if (board[curRow][curCol].shipInfo !== null) {
                            return { success: false, surCells };
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
    }
    

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
    
    return {
        board,
        missedShots,
        placeShip,
        receiveAttack,
        allShipsSunk,
    };
};

module.exports = createBoard;

