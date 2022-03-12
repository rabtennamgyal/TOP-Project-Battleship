const Ship = require('../modules/shipfactory');

// 🚢 Ship Test

test('Does it push the number to the array', () => {
    const Ship1 = new Ship(1, false);
    const arr = Ship1.marked;
    Ship1.hit(1);

    expect(arr).toContain(1);
});

test('Is the ship sunked ?', () => {
    const Ship1 = new Ship(3, false);
    Ship1.hit(1);
    Ship1.hit(2);
    Ship1.hit(3);
    const sunked = Ship1.isSunk();

    expect(sunked).toBe(true);
});

