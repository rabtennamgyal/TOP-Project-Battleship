const Ship = require('./shipfactory');
// 👾 GameBoard Factory Function

function GameBoard() {
    // 1. Create board for the game ( that should be connected with the DOM ).
    let board;
    let board2;
    const missedShots = []; // will records all the missed shots
    
    // 1. ceate board
    const createBoard = () => {
        board = [];

        while (board.length !== 100) {
            board.push('');
        }

        return board;
    };

    // 1.a create board
    const createBoard2 = () => {
        board2 = [];

        while (board2.length !== 100) {
            board2.push('');
        }

        return board2;
    };

    
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

    // 2.a Place Ships in the board 
    const placeShipX2 = (start, length, name) => {
        // Take the already created ship as an argument and place it in an array. 
        if (length === 2) {
            board2.splice(start, length, name, name);
        } else if (length === 3) {
            board2.splice(start, length, name, name, name);
        } else if (length === 4) {
            board2.splice(start, length, name, name, name, name);
        } else if (length === 5) {
            board2.splice(start, length, name, name, name, name, name);
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

    return { missedShots, createBoard, createBoard2, placeShipX, placeShipX2, placeShipY, receiveAttack };
};





module.exports = GameBoard;
