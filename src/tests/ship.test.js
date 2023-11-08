const { createShip } = require('../factories/createShip');

test('hit marker', () => {
    const carrier = createShip(5);

    carrier.hit();

    expect(carrier.hitTimes).toBe(1);
});