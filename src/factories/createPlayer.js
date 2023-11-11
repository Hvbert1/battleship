const createPlayer = (board, name) => {
    let nextTurn = 'player';

    const changeTurn = function() { 
        if (nextTurn === 'player') {
            nextTurn = 'AI';
        } else {
            nextTurn = 'player'
        }
    };

    const getCurrentTurn = function() {
        return nextTurn;
    }

    return {
        board: board,
        name: name,
        changeTurn,
        getCurrentTurn,
    };
};

const createBot = (board, name) => {
    const {changeTurn, getCurrentTurn} = createPlayer(board, name);
    const allShots = [];

    const randomNumber = () => {
        return Math.floor(Math.random() * 9);
    };

    const computerSelection = () => {
        let randRow = randomNumber();
        let randCol = randomNumber();

        if(allShots.find((shot) => shot.row === randRow && shot.col === randCol)) {
            return false;
        } else {
            allShots.push({ row: randRow, col: randCol });
            return { row: randRow, col: randCol };
        }
    };

    return {
        board: board,
        name: name,
        changeTurn,
        getCurrentTurn,
        randomNumber,
        computerSelection,
    };
};

module.exports = { createPlayer, createBot };
