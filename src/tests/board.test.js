const createBoard = require('../factories/createBoard');

test('board initialised', () => {
    const newBoard = createBoard();

    const totalCells = newBoard.board.flat().length;
    
    expect(totalCells).toBe(100);
})

