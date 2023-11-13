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
    const allShips = [];

    const carrier = createShip(5, 0, false);
    const battleship = createShip(4, 0, false);
    const destroyer = createShip(3, 0, false);
    const submarine = createShip(2, 0, false);
    const patrolBoat = createShip(1, 0, false);

    allShips.push(carrier);
    allShips.push(battleship);
    allShips.push(destroyer);
    allShips.push(submarine);
    allShips.push(patrolBoat);

    return allShips;
}

const assignShips = (board) => {
    for (let i = 0; i < createShips().length; i++) {
        board.placeShip(createShips()[i], i, 0, 'horizontal')
    }
};

module.exports = mainGameLoop;

