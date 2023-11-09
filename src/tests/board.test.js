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

    expect(() => newBoard.placeShip(carrier, -1, 12, "horizontal")).toThrow("Ship placement is out of bounds");
});


test('test receive attack from input', () => {
    // takes in coordinates
    // checks if ship is there or not
    // if ship there, send hit() function to ship
    // else record coordinate of missed spot

    const newBoard = createBoard();
    const carrier = createShip(5);

    newBoard.placeShip(carrier, 1, 2, "horizontal")

    expect(newBoard.receiveAttack(1, 2)).toBeTruthy();
});



