const { createPlayer, createBot } = require('../factories/createPlayer');
const createBoard = require('../factories/createBoard');

const mainGameLoop = () => {
    const playerBoard = createBoard();
    const botBoard = createBoard();
    const player = createPlayer(playerBoard, 'player');
    const ai = createBot(botBoard, 'ai');
}