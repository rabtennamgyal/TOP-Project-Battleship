import { changeBasisX, changeBasisY } from './util/domutil';

const gameBoard = require('../modules/factories/gameboard');
const Ship = require('../modules/factories/shipfactory');
// grid one is grid, grid two is gridd.
const grids = document.querySelectorAll('.grid');
const gridds = document.querySelectorAll('.gridd');
const directionBtn = document.getElementById('changeDirection');

let currentDirection = 'X';
let foo = 'destroyer';
// 😀
let currentDirection2 = 'X';
let foo2 = 'destroyer';

const newBoard = new gameBoard();
const board = newBoard.createBoard();
const covered = []; // this arr keeps track of all the indexes that are covered in the board.
// 
const newBoard2 = new gameBoard();
const board2 = newBoard2.createBoard2();
const covered2 = []; // this arr keeps track of all the indexes that are covered in the board.

const destroyer = new Ship('destroyer', 2);
const submarine = new Ship('submarine', 2);
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 4);
const carrier = new Ship('carrier', 5);
// 
const destroyer2 = new Ship('destroyer', 2);
const submarine2 = new Ship('submarine', 2);
const cruiser2 = new Ship('cruiser', 3);
const battleship2 = new Ship('battleship', 4);
const carrier2 = new Ship('carrier', 5);

// const missedShots = newBoard.missedShots;


function changeDirection() {
    if (currentDirection === 'X') {
        currentDirection = 'Y';
    } else if (currentDirection === 'Y') {
        currentDirection = 'X';
    }
};
// 
function changeDirection2() {
    if (currentDirection2 === 'X') {
        currentDirection2 = 'Y';
    } else if (currentDirection2 === 'Y') {
        currentDirection2 = 'X';
    }
}


// 1. this function should also take care of creating the ships.
// a. should also check if a ship is already placed on a certain index.


function shipPlacement(e, length) {
    const target = e.target;
    const index = Number(target.getAttribute('index'));

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

                if (foo === 'destroyer') {
                    newBoard.placeShipX(index, length, destroyer.name, destroyer.name);
                    foo = 'submarine';
                } else if (foo === 'submarine') {
                    newBoard.placeShipX(index, length, submarine.name, submarine.name);
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

                newBoard.placeShipX(index, length, cruiser.name, cruiser.name, cruiser.name);
                foo = 'battleship';
            }
        } else if (length === 4 && position + length <= 10) {
            const one = index;
            const two = index + 1;
            const three = index + 2;
            const four = index + 3;

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

                newBoard.placeShipX(index, length, battleship.name, battleship.name, battleship.name, battleship.name);
                foo = 'carrier';
            }
        } else if (length === 5 && position + length <= 10) { // or could be lenght < 10
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
                
                newBoard.placeShipX(index, length, carrier.name, carrier.name, carrier.name, carrier.name, carrier.name);
                
                setTimeout(() => {
                    foo = 'attack';
                    grids.forEach(el => el.style.background = '#41ffb0');
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

                if (foo === 'destroyer') {
                    newBoard.placeShipY(length, foo, one, two);
                    foo = 'submarine';
                } else if (foo === 'submarine') {
                    newBoard.placeShipY(length, foo, one, two);
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

                newBoard.placeShipY(length, foo, one, two, three)
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
                
                newBoard.placeShipY(length, foo, one, two, three, four)
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

                newBoard.placeShipY(length, foo, one, two, three, four, five);

                setTimeout(() => {
                    foo = 'attack';
                    grids.forEach(el => el.style.background = '#41ffb0');
                }, 2000);
            }
        };
    };
};
// 😀
function shipPlacement2(e, length) {
    const target = e.target;
    const index = Number(target.getAttribute('index'));

    const arr = []; // make sure the first number >= 0 && last number <= 99.

    if (currentDirection2 === 'X') {
        const position = changeBasisX(index);

        if (length === 2 && position + length <= 10 && foo2 === 'destroyer' || foo2 === 'submarine') {
            const one = index;
            const two = index + 1;
            
            if (covered2.includes(one) || covered2.includes(two)) {
                return;
            } else {
                arr.push(index, index + 1);
                covered2.push(index, index + 1);
                const divs = Array.from(gridds);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });

                if (foo2 === 'destroyer') {
                    newBoard2.placeShipX2(index, length, destroyer2.name, destroyer2.name);
                    foo2 = 'submarine';
                } else if (foo2 === 'submarine') {
                    newBoard2.placeShipX2(index, length, submarine2.name, submarine2.name);
                    foo2 = 'cruiser';
                }
            }
        } else if (length === 3 && position + length <= 10) {
            const one = index; 
            const two = index + 1;
            const three = index + 2;

            if (covered2.includes(one) || covered2.includes(two) || covered2.includes(three)) {
                return;
            } else {
                arr.push(index, index + 1, index + 2);
                covered2.push(index, index + 1, index + 2);
                const divs = Array.from(gridds);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });

                newBoard2.placeShipX2(index, length, cruiser2.name, cruiser2.name, cruiser2.name);
                foo2 = 'battleship';
            }
        } else if (length === 4 && position + length <= 10) {
            const one = index;
            const two = index + 1;
            const three = index + 2;
            const four = index + 3;

            if (covered2.includes(one) || covered2.includes(two) || covered2.includes(three) || covered2.includes(four)) {
                return;
            } else {
                arr.push(index, index + 1, index + 2, index + 3);
                covered2.push(index, index + 1, index + 2, index + 3);
                const divs = Array.from(gridds);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });

                newBoard2.placeShipX2(index, length, battleship2.name, battleship2.name, battleship2.name, battleship2.name);
                foo2 = 'carrier';
            }
        } else if (length === 5 && position + length <= 10) { // or could be lenght < 10
            const one = index; 
            const two = index + 1;
            const three = index + 2;
            const four = index + 3;
            const five = index + 4;

            if (covered2.includes(one) || covered2.includes(two) || covered2.includes(three) || covered2.includes(four) || covered2.includes(five)) {
                return;
            } else {
                arr.push(index, index + 1, index + 2, index + 3, index + 4);
                covered2.push(index, index + 1, index + 2, index + 3, index + 4);
                const divs = Array.from(gridds);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });
                
                newBoard2.placeShipX2(index, length, carrier2.name, carrier2.name, carrier2.name, carrier2.name, carrier2.name);
                
                setTimeout(() => {
                    foo2 = 'attack';
                    gridds.forEach(el => el.style.background = '#41ffb0');
                }, 2000);
            }
        } 
    };

    if (currentDirection2 === 'Y') {
        const position = changeBasisY(index);

        if (length === 2 && position + length <= 82 && foo2 === 'destroyer' || foo2 === 'submarine') {
            const one = index;
            const two = index + 10;

            if (covered2.includes(one) || covered2.includes(two)) {
                return;
            } else {
                arr.push(index, index + 10);
                covered2.push(index, index + 10);
                const divs = Array.from(gridds);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });

                if (foo2 === 'destroyer') {
                    newBoard2.placeShipY(length, foo2, one, two);
                    foo2 = 'submarine';
                } else if (foo2 === 'submarine') {
                    newBoard2.placeShipY(length, foo2, one, two);
                    foo2 = 'cruiser';
                }
            };
        } else if (length === 3 && position + length <= 73) {
            const one = index; 
            const two = index + 10;
            const three = index + 20;

            if (covered2.includes(one) || covered2.includes(two) || covered2.includes(three)) {
                return;
            } else {
                arr.push(index, index + 10, index + 20);
                covered2.push(index, index + 10, index + 20)
                const divs = Array.from(gridds);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });

                newBoard2.placeShipY(length, foo2, one, two, three)
                foo2 = 'battleship';
            }
        } else if (length === 4 && position + length <= 64) {
            const one = index;
            const two = index + 10;
            const three = index + 20;
            const four = index + 30;

            if (covered2.includes(one) || covered2.includes(two) || covered2.includes(three) || covered2.includes(four)) {
                return;
            } else {
                arr.push(index, index + 10, index + 20, index + 30);
                covered2.push(index, index + 10, index + 20, index + 30);
                const divs = Array.from(gridds);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });
                
                newBoard2.placeShipY(length, foo2, one, two, three, four)
                foo2 = 'carrier';
            }
        } else if (length === 5 && position + length <= 55) {
            const one = index; 
            const two = index + 10;
            const three = index + 20;
            const four = index + 30;
            const five = index + 40;

            if (covered2.includes(one) || covered2.includes(two) || covered2.includes(three) || covered2.includes(four) || covered2.includes(five)) {
                return;
            } else {
                arr.push(index, index + 10, index + 20, index + 30, index + 40);
                covered2.push(index, index + 10, index + 20, index + 30, index + 40);
                const divs = Array.from(gridds);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });

                newBoard2.placeShipY(length, foo2, one, two, three, four, five);

                setTimeout(() => {
                    foo2 = 'attack';
                    grids.forEach(el => el.style.background = '#41ffb0');
                }, 2000);
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
// 😀
function setShips2(e) {
    if (foo2 === 'destroyer') {
        shipPlacement2(e, 2);
    }

    if (foo2 === 'submarine') {
        shipPlacement2(e, 2);
    }

    if (foo2 === 'cruiser') {
        shipPlacement2(e, 3);
    }

    if (foo2 === 'battleship') {
        shipPlacement2(e, 4);
    }

    if (foo2 === 'carrier') {
        shipPlacement2(e, 5);
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
// 
function attack2(e) {
    const target = e.target;
    const index = Number(target.getAttribute('index'));

    if (board2[index] !== '') {
        if (gridds[index].style.background !== 'red') {
            const shipType = board2[index];
            gridds[index].style.background = 'red';

            if (shipType === 'destroyer') {
                destroyer2.hit(index);
                destroyer2.isSunk();
                board2.splice(index, 1, '');
            } else if (shipType === 'submarine') {
                submarine2.hit(index);
                submarine2.isSunk();
                board2.splice(index, 1, '');
            } else if (shipType === 'cruiser') {
                cruiser2.hit(index);
                cruiser2.isSunk();
                board2.splice(index, 1, '');
            } else if (shipType === 'battleship') {
                battleship2.hit(index);
                battleship2.isSunk();
                board2.splice(index, 1, '');
            } else if (shipType === 'carrier') {
                carrier2.hit();
                carrier2.isSunk();
                board2.splice(index, 1, '');
            }
        }
    } else {
        if (gridds[index].style.background !== 'red') {
            gridds[index].style.background = '#fff';
            newBoard2.receiveAttack(index);
        }
    };

    console.log(board2);
};

// Function check board for winners
function checkBoard() {
    let count = 0;

    grids.forEach(el => {
        if (el.style.background === 'red') {
            count++;
        }
    });

    if (count === 16) {
        console.log('Player one win!!');
    };
};
// 
function checkBoard2() {
    let count = 0;

    gridds.forEach(el => {
        if (el.style.background === 'red') {
            count++;
        }
    });

    if (count === 16) {
        console.log('Player 2 wins!!');
    };
};

// Event Listeners 

grids.forEach(el => {
    el.addEventListener('click', (e) => {
        if (foo !== 'attack') {
            setShips(e);
        }

        if (foo === 'attack') {
            attack(e);
            checkBoard();
        }
    }); 
});
//
gridds.forEach(el => {
    el.addEventListener('click', (e) => {
        if (foo2 !== 'attack') {
            setShips2(e);
        }

        if (foo2 === 'attack') {
            attack2(e);
            checkBoard2();
        }
    }); 
});


directionBtn.addEventListener('click', changeDirection);