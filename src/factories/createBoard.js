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

    const placeShip = function(ship, row, col, direction) {
        if (row >= 0 && row + ship.length < boardSize && col >= 0 && col + ship.length < boardSize) {
            for (let i = 0; i < ship.length; i++) {
                if (direction === "vertical") {
                    this.board[row][col].shipInfo = ship;
                    row++;
                } else {
                    this.board[row][col].shipInfo = ship;
                    col++;
                }
            }
        } else {
            throw new Error("Ship placement is out of bounds");
        }
    };

    const receiveAttack = function(row, col) {
        const cellAttack = this.board[row][col];

        if (cellAttack.shipInfo !== null) {
            cellAttack.shipInfo.hit();
            return true;
        } else {
            this.missedShots.push({ row: row, col: col })
            return false;
        }
    };

    const allShipsSunk = function() {
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                if (this.board[i][j].shipInfo !== null && !this.board[i][j].shipInfo.sunk) {
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

