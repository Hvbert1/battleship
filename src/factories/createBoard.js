const createBoard = () => {
    const boardSize = 10;
    const board = [];

    for (let i = 0; i < boardSize; i++) {
        const row = [];
        for (let j = 0; j < boardSize; j++) {
            const cell = {
                row: i,
                col: j
            };
            row.push(cell);
        }
        board.push(row);
    }
    return {
        board,
    }
}

module.exports = createBoard;

