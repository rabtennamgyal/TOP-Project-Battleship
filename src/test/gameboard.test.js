// 👾 GameBoard Test
const GameBoard = require('../modules/factories/gameboard');

test('Does it create a board ?', () => {
    const game = new GameBoard();
    const board = game.createBoard();
    const length = board.length;

    // 1. Create Board Test
    expect(board).toContain('');
    expect(length).toBe(100);

    // 2. Place Ship Test
});