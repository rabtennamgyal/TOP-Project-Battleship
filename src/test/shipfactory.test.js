const Ship = require('../modules/factories/shipfactory');

// 🚢 Ship Test

test('Does it push the number in the array', () => {
    const Ship1 = new Ship(1, false);
    const arr = Ship1.marked;
    Ship1.hit(1);

    expect(arr).toContain(1);
});

