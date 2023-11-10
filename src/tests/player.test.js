const createBoard = require('../factories/createBoard');
const createPlayer = require('../factories/createPlayer');
const createShip = require('../factories/createShip');

test('check player turn and attack nothing', () => {
    const testBoard = createBoard();
    const testPlayer = createPlayer(testBoard, 'player');

    expect(testPlayer.changeTurn(1, 1)).toBeFalsy();
});

test('check player turn and attack ship', () => {
    const testBoard = createBoard();
    const testShip = createShip(5);
    const newPlayer = createPlayer(testBoard, 'player');

    testBoard.placeShip(testShip, 1, 2, "horizontal");

    expect(newPlayer.changeTurn(1, 2)).toBeTruthy();
});