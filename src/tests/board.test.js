const createBoard = require('../factories/createBoard');
const createShip = require('../factories/createShip');


test('board initialised', () => {
    const newBoard = createBoard();
    const totalCells = newBoard.board.flat().length;
    
    expect(totalCells).toBe(100);
})

test('ship placement', () => {
    const newBoard = createBoard();

    newBoard.board[1][1].placed = true;
    const carrier = createShip(5);
    newBoard.board[1][1].shipInfo = carrier;

    expect(() => newBoard.placeShip(carrier, -1, 12, "horizontal")).toThrow("Ship placement is out of bounds");
});

