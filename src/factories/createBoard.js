const createBoard = () => {
    const boardSize = 10;
    const board = [];

    for (let i = 0; i < boardSize; i++) {
        const row = [];
        for (let j = 0; j < boardSize; j++) {
            const cell = {
                row: i,
                col: j,
                placed: false,
                shipInfo: null,
            };
            row.push(cell);
        }
        board.push(row);
    }

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
    }

    const receiveAttack = function(row, col) {
        if (this.board[row][col].shipInfo !== null) {
            return true;
        } else return false;
    }
    return {
        board,
        placeShip,
        receiveAttack,
    }
}

module.exports = createBoard;

