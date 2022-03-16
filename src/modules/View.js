import { changeBasisX, changeBasisY } from './util/domutil';

const gameBoard = require('../modules/factories/gameboard');
const Ship = require('../modules/factories/shipfactory');
const grids = document.querySelectorAll('.grid');
const directionBtn = document.getElementById('changeDirection');

let currentDirection = 'X';
let foo = 'destroyer';

const newBoard = new gameBoard();
const board = newBoard.createBoard();
const covered = []; // this arr keeps track of all the indexes that are covered in the board.

const destroyer = new Ship('destroyer', 2);
const submarine = new Ship('submarine', 2);
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 4);
const carrier = new Ship('carrier', 5);

const missedShots = newBoard.missedShots;


console.log(board);


function changeDirection() {
    if (currentDirection === 'X') {
        currentDirection = 'Y';
    } else if (currentDirection === 'Y') {
        currentDirection = 'X';
    }
}


// 1. this function should also take care of creating the ships.
// a. should also check if a ship is already placed on a certain index.


// return is not stoping the ship placement function cuz it is stoping the 
// covered.forEach() functions. need that return on the outer scope.

function shipPlacement(e, length) {
    const target = e.target;
    const index = Number(target.getAttribute('index'));

    const arr = []; // make sure the first number >= 0 && last number <= 99.

    if (currentDirection === 'X') {
        const position = changeBasisX(index);

        if (length === 2 && position + length <= 10) {
            arr.push(index, index + 1);
            covered.forEach(el => {
                if (el === index || el === index + 1) {
                    console.log('x');
                    return;
                }
            })
            covered.push(index, index + 1);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });
            newBoard.placeShip(index, length, destroyer.name, destroyer.name);
        } else if (length === 3 && position + length <= 10) {
            arr.push(index, index + 1, index + 2);
            covered.forEach(el => {
                if (el === index || el === index + 1 || el === index + 2) {
                    console.log('x');
                }
            })
            covered.push(index, index + 1, index + 2);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });
            newBoard.placeShip(index, length, cruiser.name, cruiser.name, cruiser.name);
        } else if (length === 4 && position + length <= 10) {
            arr.push(index, index + 1, index + 2, index + 3);
            covered.forEach(el => {
                if (el === index || el === index + 1 || el === index + 2 || el === index + 3) {
                    console.log('x');
                }
            })
            covered.push(index, index + 1, index + 2, index + 3);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });
            newBoard.placeShip(index, length, battleship.name, battleship.name, battleship.name, battleship.name);
        } else if (length === 5 && position + length <= 10) {
            arr.push(index, index + 1, index + 2, index + 3, index + 4);
            covered.forEach(el => {
                if (el === index || el === index + 1 || el === index + 2 || el === index + 3 || el === index + 4) {
                    console.log('x');
                }
            })
            covered.push(index, index + 1, index + 2, index + 3, index + 4);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });
            newBoard.placeShip(index, length, carrier.name, carrier.name, carrier.name, carrier.name, carrier.name);
        }
    };

    if (currentDirection === 'Y') {
        const position = changeBasisY(index);

        if (length === 2 && position + length <= 82) {
            arr.push(index, index + 10);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });
        } else if (length === 3 && position + length <= 73) {
            arr.push(index, index + 10, index + 20);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });
        } else if (length === 4 && position + length <= 64) {
            arr.push(index, index + 10, index + 20, index + 30);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });
        } else if (length === 5 && position + length <= 55) {
            arr.push(index, index + 10, index + 20, index + 30, index + 40);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });
        };
    };
};


function setShips(e) {
    if (foo === 'destroyer') {
        shipPlacement(e, 2);
        setTimeout(() => {
            foo = 'submarine';
        }, 100);
    }

    if (foo === 'submarine') {
        shipPlacement(e, 2);
        setTimeout(() => {
            foo = 'cruiser';
        }, 100);
    }

    if (foo === 'cruiser') {
        shipPlacement(e, 3);
        setTimeout(() => {
            foo = 'battleship';
        }, 100);
    }

    if (foo === 'battleship') {
        shipPlacement(e, 4);
        setTimeout(() => {
            foo = 'carrier';
        }, 100);
    }

    if (foo === 'carrier') {
        shipPlacement(e, 5);
    }
};


function attack(e) {
    const target = e.target;
    const index = Number(target.getAttribute('index'));

    if (board[index] !== '') {
        if (grids[index].style.background !== 'red') {
            const shipType = board[index];
            grids[index].style.background = 'red';

            if (shipType === 'destroyer') {
                destroyer.hit(index);
                destroyer.isSunk();
                board.splice(index, 1, '');
                newBoard.checkShips();
            } else if (shipType === 'submarine') {
                submarine.hit(index);
                submarine.isSunk();
                board.splice(index, 1, '');
            } else if (shipType === 'cruiser') {
                cruiser.hit(index);
                cruiser.isSunk();
                board.splice(index, 1, '');
            } else if (shipType === 'battleship') {
                battleship.hit(index);
                battleship.isSunk();
                board.splice(index, 1, '');
            } else if (shipType === 'carrier') {
                carrier.hit();
                carrier.isSunk();
                board.splice(index, 1, '');
            }
        }
    } else {
        if (grids[index].style.background !== 'red') {
            grids[index].style.background = '#fff';
            newBoard.receiveAttack(index);
            console.log(missedShots);
        }
    }
};

// Event Listeners 

grids.forEach(el => {
    el.addEventListener('click', (e) => {
        setShips(e);
    });
});

directionBtn.addEventListener('click', changeDirection);