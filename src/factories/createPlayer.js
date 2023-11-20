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
    const occupiedSquares = [];
    const prioCells = [];     //array to hold prioritised cells

    const randomNumber = () => {
        return Math.floor(Math.random() * 10);
    };

    const computerSelection = () => {
        let curCell = prioCells[0];
        console.log(prioCells);

        if (prioCells.length !== 0) {
            if (!occupiedSquares.find((shot) => shot.row === prioCells[0].row && shot.col === prioCells[0].col)) {
                prioCells.shift();      //removes first cell
                return curCell;
            }  else {
                prioCells.shift();      
                curCell = prioCells[0];
                prioCells.shift();      
                return curCell;
            }
        } else {
            let maxAttempts = 50;
    
            while (maxAttempts > 0) {
                let randRow = randomNumber();
                let randCol = randomNumber();
        
                if (!occupiedSquares.find((shot) => shot.row === randRow && shot.col === randCol)) {
                    occupiedSquares.push({ row: randRow, col: randCol });
                    return { row: randRow, col: randCol };
                }
                maxAttempts--;
            }
            return false; 
        }
    };

    const addCell = (cell, arr) => {
        arr.push(cell);
    };

    return {
        board: board,
        name: name,
        occupiedSquares,
        prioCells,
        addCell,
        changeTurn,
        getCurrentTurn,
        randomNumber,
        computerSelection,
    };
};

module.exports = { createPlayer, createBot };
