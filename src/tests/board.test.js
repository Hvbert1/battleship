const createBoard = require('../factories/createBoard');

test('board initialised', () => {
    const newBoard = createBoard();
    const totalCells = newBoard.board.flat().length;
    
    expect(totalCells).toBe(100);
})

test('ship placement', () => {
    const newBoard = createBoard();

    newBoard.board[1][1].placed = true;

    expect(newBoard.board[1][1]).toHaveProperty('placed', true);
});

