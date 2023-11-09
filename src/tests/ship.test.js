const createShip = require('../factories/createShip');

test('hit marker', () => {
    const carrier = createShip(5);

    carrier.hit();

    expect(carrier.hitTimes).toBe(1);
});

test('create sunk ship', () => {
    const carrier = createShip(5);
    
    for (let i = 0; i < carrier.length; i++) {
        carrier.hit();
    }
    carrier.isSunk();
    expect(carrier.sunk).toBeTruthy();
});