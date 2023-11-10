const createPlayer = (board, name) => {
    let nextTurn = 'player';

    const changeTurn = function(row, col) { 
        if (nextTurn === 'player') {
            nextTurn = 'AI';
        } else {
            nextTurn = 'player'
            board.receiveAttack(row, col)
        }
    };

    return {
        board: board,
        name: name,
        changeTurn,
    };
};
  
module.exports = createPlayer;