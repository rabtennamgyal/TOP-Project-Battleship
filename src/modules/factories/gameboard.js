const Ship = require('./shipfactory');
// 👾 GameBoard Factory Function

function GameBoard() {
    // 1. Create board for the game ( that should be connected with the DOM ).
    let board;
    const missedShots = []; // will records all the missed shots
    
    const createBoard = () => {
        board = [];

        while (board.length !== 100) {
            board.push('');
        }

        return board;
    }
    
    // 2. Place Ships in the board X-axis.
    const placeShipX = (start, length, name) => {
        // Take the already created ship as an argument and place it in an array. 
        if (length === 2) {
            board.splice(start, length, name, name);
        } else if (length === 3) {
            board.splice(start, length, name, name, name);
        } else if (length === 4) {
            board.splice(start, length, name, name, name, name);
        } else if (length === 5) {
            board.splice(start, length, name, name, name, name, name);
        };
    };

    // 3. Place Ships in the board Y-axis.
    const placeShipY = (length, foo, one, two, three, four, five) => {
        if (length === 2) {
            for (let i = 0; i <= board.length; i++) {
                if (foo === 'destroyer') {
                    if (i === one || i === two) {
                        board[i] = 'destroyer';
                    }
                } else if (foo === 'submarine') {
                    if (i === one || i === two) {
                        board[i] = 'submarine';
                    }
                }
            }
        } else if (length === 3) {
            for (let i = 0; i <= board.length; i++) {
                if (i === one || i === two || i === three) {
                    board[i] = 'cruiser';
                }
            }
        } else if (length === 4) {
            for (let i = 0; i <= board.length; i++) {
                if (i === one || i === two || i === three || i === four) {
                    board[i] = 'battleship';
                }
            }
        } else if (length === 5) {
            for (let i = 0; i <= board.length; i++) {
                if (i === one || i === two || i === three || i === four || i === five) {
                    board[i] = 'carrier';
                }
            }
        }
    };

    // 4. Receive Attack 
    const receiveAttack = (index) => {
        if (!missedShots.includes(index)) {
            missedShots.push(index);
        }
    };

    return { missedShots, createBoard, placeShipX, placeShipY, receiveAttack };
};





module.exports = GameBoard;



// const board =  [
//     'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10',
//     'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10',
//     'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10',
//     'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10'
// ];