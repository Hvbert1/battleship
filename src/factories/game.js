const { createPlayer, createBot } = require('../factories/createPlayer');
const createBoard = require('../factories/createBoard');
const createShip = require('../factories/createShip');


const mainGameLoop = () => {
    const playerBoard = createBoard();
    const botBoard = createBoard();

    assignShips(playerBoard);
    assignShips(botBoard);

    const player = createPlayer(playerBoard, 'player');
    const ai = createBot(botBoard, 'ai');

    return { player, ai };
}

const createShips = () => {
    const shipNames = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrolBoat']
    const allShips = [];

    for (let i = shipNames.length; i > 0; i--) {
        let newShip = shipNames[i]
        newShip = createShip(i);
        allShips.push(newShip);
    }
    return allShips;
}

const assignShips = (board) => {
    for (let i = 0; i < createShips().length; i++) {
        board.placeShip(createShips()[i], i, 0, 'horizontal')
    }
};

module.exports = mainGameLoop;

