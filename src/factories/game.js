const { createPlayer, createBot } = require('../factories/createPlayer');
const createBoard = require('../factories/createBoard');
const createShip = require('../factories/createShip');


const mainGameLoop = () => {
    const playerBoard = createBoard();
    const botBoard = createBoard();
    const botShips = createShips();
    const playerShips = createShips();
    const player = createPlayer(playerBoard, 'player');
    const ai = createBot(botBoard, 'ai');

    assignShipsRecursive(playerBoard, playerShips);
    assignShipsRecursive(botBoard, botShips);

    return { player, ai };
};

const createShips = () => {
    const shipNames = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrolBoat'];
    const allShips = [];

    for (let i = 0; i < shipNames.length; i++) {
        let newShip = shipNames[i]
        newShip = createShip(i + 1);
        allShips.push(newShip);
    }
    return allShips;
};

const assignShipsRecursive = (board, ships) => {
    // base case: all ships are placed
    if (ships.length === 0) {
        return;
    }

    const randRow = randomNumber();
    const randCol = randomNumber();
    const randDir = Math.random() < 0.5;

    const ship = ships[0];

    try {
        board.placeShip(ship, randRow, randCol, randDir);
        ship.isHor = randDir;
        assignShipsRecursive(board, ships.slice(1)); // call function with left over ships

    } catch (error) {
        assignShipsRecursive(board, ships); // retry ship placement
    }
};

const randomNumber = () => {
    return Math.floor(Math.random() * 10);
};

module.exports = mainGameLoop;

