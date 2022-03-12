// 👾 GameBoard Test
const GameBoard = require('../modules/gameboard');

test('Does it create a board ?', () => {
    const GameBoard1 = new GameBoard();
    const board = GameBoard1.getBoard();

    expect(board).toContain(
    'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10',
    'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10',
    'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10',
    'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10'
    );
});