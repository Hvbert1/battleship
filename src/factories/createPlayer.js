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
        return Math.floor(Math.random() * 10);
    };

    const computerSelection = () => {
        let maxAttempts = 50;
    
        while (maxAttempts > 0) {
            let randRow = randomNumber();
            let randCol = randomNumber();
    
            if (!allShots.find((shot) => shot.row === randRow && shot.col === randCol)) {
                allShots.push({ row: randRow, col: randCol });
                return { row: randRow, col: randCol };
            }
            maxAttempts--;
        }
        return false; 
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
