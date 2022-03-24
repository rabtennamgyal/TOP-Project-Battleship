// 👾 GameBoard Test
const GameBoard = require('../modules/factories/gameboard');

test('Does it create a board ?', () => {
    const game = new GameBoard();
    const board = game.createBoard();
    const length = board.length;

    // 1. Create Board Test
    expect(board).toContain('');
    expect(length).toBe(100);

    // 2. place ship
    game.placeShipX(2, 3, 'cruiser', 'curiser', 'cruiser');
    expect(board).toContain('cruiser');

    // 3. Clear board 
    game.clearBoard(board);
    board.forEach(element => {
        expect(element).toBe('');
    });
});

test('Does it creat anoter board ?', () => {
    const game = new GameBoard();
    const board = game.createBoard2();
    const length = board.length;

    // 1. Create board 2
    expect(board).toContain('');
    expect(length).toBe(100);
});