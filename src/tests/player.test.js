const { createPlayer, createBot } = require('../factories/createPlayer');
const createBoard = require('../factories/createBoard');

test('check player name', () => {
    const testBoard = createBoard();
    const testPlayer = createPlayer(testBoard, 'player');

    expect(testPlayer.name).toMatch(/player/);
});

test('check change player turn', () => {
    const testBoard = createBoard();
    const testPlayer = createPlayer(testBoard, 'player');

    testPlayer.changeTurn();

    expect(testPlayer.getCurrentTurn()).toBe('AI');
});

test('computerSelection returns coordinates', () => {
    const testBoard = createBoard();
    const testBot = createBot(testBoard, 'AI');

    expect(testBot.computerSelection()).toEqual(expect.objectContaining({
        row: expect.any(Number),
        col: expect.any(Number),
    }));;
});
