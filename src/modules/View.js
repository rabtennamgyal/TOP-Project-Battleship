import { changeBasisX, changeBasisY } from './util/domutil';

const gameBoard = require('../modules/factories/gameboard');
const Ship = require('../modules/factories/shipfactory');
const grids = document.querySelectorAll('.grid');
const directionBtn = document.getElementById('changeDirection');

let currentDirection = 'X';
let foo = 'destroyer';
let count = 0; // move from destroyer & submarine to cruiser. 

const newBoard = new gameBoard();
const board = newBoard.createBoard();
const covered = []; // this arr keeps track of all the indexes that are covered in the board.

const destroyer = new Ship('destroyer', 2);
const submarine = new Ship('submarine', 2);
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 4);
const carrier = new Ship('carrier', 5);

const missedShots = newBoard.missedShots;


function changeDirection() {
    if (currentDirection === 'X') {
        currentDirection = 'Y';
    } else if (currentDirection === 'Y') {
        currentDirection = 'X';
    }
}


// 1. this function should also take care of creating the ships.
// a. should also check if a ship is already placed on a certain index.


function shipPlacement(e, length) {
    const target = e.target;
    const index = Number(target.getAttribute('index'));
    console.log(index);
    console.log(covered);

    const arr = []; // make sure the first number >= 0 && last number <= 99.

    if (currentDirection === 'X') {
        const position = changeBasisX(index);

        if (length === 2 && position + length <= 10 && foo === 'destroyer' || foo === 'submarine') {
            const one = index;
            const two = index + 1;
            
            if (covered.includes(one) || covered.includes(two)) {
                return;
            } else {
                arr.push(index, index + 1);
                covered.push(index, index + 1);
                const divs = Array.from(grids);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });

                // if (foo === 'destroyer') {
                newBoard.placeShip(index, length, destroyer.name, destroyer.name);
                // } else if (foo === 'submarine') {
                //  newBoard.placeShip(index, length, submarine.name, submarine.name);
                // }

                count++;

                if (count === 2) {
                    foo = 'cruiser';
                }
            }
        } else if (length === 3 && position + length <= 10) {
            const one = index; 
            const two = index + 1;
            const three = index + 2;

            if (covered.includes(one) || covered.includes(two) || covered.includes(three)) {
                return;
            } else {
                arr.push(index, index + 1, index + 2);
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
                foo = 'battleship';
            }
        } else if (length === 4 && position + length <= 10) {
            const one = index;
            const two = index + 1;
            const three = index + 2;
            const four = index + 3;
            console.log(one, two, three, four);
            console.log(covered);

            if (covered.includes(one) || covered.includes(two) || covered.includes(three) || covered.includes(four)) {
                return;
            } else {
                arr.push(index, index + 1, index + 2, index + 3);
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
                foo = 'carrier';
            }
        } else if (length === 5 && position + length < 10) {
            const one = index; 
            const two = index + 1;
            const three = index + 2;
            const four = index + 3;
            const five = index + 4;

            if (covered.includes(one) || covered.includes(two) || covered.includes(three) || covered.includes(four) || covered.includes(five)) {
                return;
            } else {
                arr.push(index, index + 1, index + 2, index + 3, index + 4);
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
                
                setTimeout(() => {
                    foo = 'attack';
                }, 2000);
            }
        } 
    };

    if (currentDirection === 'Y') {
        const position = changeBasisY(index);

        if (length === 2 && position + length <= 82 && foo === 'destroyer' || foo === 'submarine') {
            const one = index;
            const two = index + 10;

            if (covered.includes(one) || covered.includes(two)) {
                return;
            } else {
                arr.push(index, index + 10);
                covered.push(index, index + 10);
                const divs = Array.from(grids);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });
                newBoard.placeShip(index, length, destroyer.name, destroyer.name);
                count++;

                if (count === 2) {
                    foo = 'cruiser';
                }
            };
        } else if (length === 3 && position + length <= 73) {
            const one = index; 
            const two = index + 10;
            const three = index + 20;

            if (covered.includes(one) || covered.includes(two) || covered.includes(three)) {
                return;
            } else {
                arr.push(index, index + 10, index + 20);
                covered.push(index, index + 10, index + 20)
                const divs = Array.from(grids);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });
                newBoard.placeShip(index, length, cruiser.name, cruiser.name, cruiser.name);
                foo = 'battleship';
            }
        } else if (length === 4 && position + length <= 64) {
            const one = index;
            const two = index + 10;
            const three = index + 20;
            const four = index + 30;

            if (covered.includes(one) || covered.includes(two) || covered.includes(three) || covered.includes(four)) {
                return;
            } else {
                arr.push(index, index + 10, index + 20, index + 30);
                covered.push(index, index + 10, index + 20, index + 30);
                const divs = Array.from(grids);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });
                newBoard.placeShip(index, length, battleship.name, battleship.name, battleship.name, battleship.name);
                foo = 'carrier';
            }
        } else if (length === 5 && position + length <= 55) {
            const one = index; 
            const two = index + 10;
            const three = index + 20;
            const four = index + 30;
            const five = index + 40;

            if (covered.includes(one) || covered.includes(two) || covered.includes(three) || covered.includes(four) || covered.includes(five)) {
                return;
            } else {
                arr.push(index, index + 10, index + 20, index + 30, index + 40);
                covered.push(index, index + 10, index + 20, index + 30, index + 40);
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
    };
};


function setShips(e) {
    if (foo === 'destroyer') {
        shipPlacement(e, 2);
    }

    if (foo === 'submarine') {
        shipPlacement(e, 2);
    }

    if (foo === 'cruiser') {
        shipPlacement(e, 3);
    }

    if (foo === 'battleship') {
        shipPlacement(e, 4);
    }

    if (foo === 'carrier') {
        shipPlacement(e, 5);
    }
};


// Attack is working on x axis but not on the Y axis.
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
        }
    };

    console.log(board);
};

// Event Listeners 

grids.forEach(el => {
    el.addEventListener('click', (e) => {
        if (foo !== 'attack') {
            setShips(e);
        }

        if (foo === 'attack') {
            attack(e);
        }
    }); 
});

directionBtn.addEventListener('click', changeDirection);
