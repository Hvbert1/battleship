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
    const newBoard = createBoard();
    const carrier = createShip(5);

    newBoard.placeShip(carrier, 1, 2, "horizontal")
    newBoard.receiveAttack(2, 2);

    // expect(newBoard.receiveAttack(2, 2)).toBeFalsy();
    // expect(newBoard.board[1][2].shipInfo.hitTimes).toBe(1);
    expect(newBoard.missedShots).toContainEqual({ row: 2, col: 2 });
});

test('check if all ships are sunk', () => {
    const newBoard = createBoard();
    const carrier = createShip(5);
    // test case for no ships
    // expect(newBoard.allShipsSunk()).toBeFalsy();

    // test case for ships
    newBoard.placeShip(carrier, 1, 2, "horizontal")
    expect(newBoard.allShipsSunk()).toBeTruthy();
})



