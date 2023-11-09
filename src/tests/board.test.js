const createBoard = require('../factories/createBoard');
const createShip = require('../factories/createShip');


test('Board initialised', () => {
    const newBoard = createBoard();
    const totalCells = newBoard.board.flat().length;
    
    expect(totalCells).toBe(100);
});

describe('Test for ship placement on the board', () => {
    let testBoard, testShip;

    beforeEach(() => {
        testBoard = createBoard();
        testShip = createShip(5);
    });

    test('Test for eligible placement vertical', () => {
        testBoard.placeShip(testShip, 1, 1, "vertical");
        for (let i = 1; i <= 5; i++) {
            expect(testBoard.board[i][1].shipInfo).toBe(testShip);
        }
    });

    test('Test for eligible placement horizontal', () => {
        testBoard.placeShip(testShip, 1, 1, "horizontal");
        for (let i = 1; i <= 5; i++) {
            expect(testBoard.board[1][i].shipInfo).toBe(testShip);
        }
    });

    test('Test for initial out of bounds placement', () => {
        expect(() => testBoard.placeShip(testShip, -1, 12, "horizontal")).toThrow("Ship placement is out of bounds");
    });

    test('Test for part of ship out of bound', () => {
        expect(() => testBoard.placeShip(testShip, 1, 9, "horizontal")).toThrow("Ship placement is out of bounds");
    });
});

describe('Test for retrieve attack functions from input', () => {
    let testBoard, testShip;

    beforeEach(() => {
        testBoard = createBoard();
        testShip = createShip(5);
        testBoard.placeShip(testShip, 1, 2, "horizontal")
    });

    test('returns false when attack misses', () => {
        expect(testBoard.receiveAttack(2, 2)).toBeFalsy();
    });

    test('checks hit times once attacked boat', () => {
        testBoard.receiveAttack(1, 2);
        testBoard.receiveAttack(1, 3);
        expect(testBoard.board[1][2].shipInfo.hitTimes).toBe(2);
    });

    test('returns saved missed shots', () => {
        testBoard.receiveAttack(2, 2);
        expect(testBoard.missedShots).toContainEqual({ row: 2, col: 2 });
    });
});

describe('Check if All Ships are Sunk', () => {
    let testBoard, testShip;

    beforeEach(() => {
        testBoard = createBoard();
        testShip = createShip(1);
    });

    test('returns true when no ships are present', () => {
      expect(testBoard.allShipsSunk()).toBeTruthy();
    });
  
    test('returns true when all ships are sunk', () => {
        testBoard.placeShip(testShip, 1, 2, "horizontal")
        testBoard.receiveAttack(1, 2);
        testShip.isSunk();
        expect(testBoard.allShipsSunk()).toBeTruthy();
    });
  
    test('returns false when at least one ship is not sunk', () => {  
        testBoard.placeShip(testShip, 1, 2, "horizontal")
        testBoard.receiveAttack(2, 2);
        testShip.isSunk();
  
      expect(testBoard.allShipsSunk()).toBeFalsy();
    });
});



