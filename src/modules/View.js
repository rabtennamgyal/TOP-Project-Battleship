import { 
    changeBasisX, changeBasisY, closeModalPvP, notifyPlayers, clearNotifyBoard,
    targetHit, targetMiss, showPvP, closePvP, direction
} from './util/domutil';


const gameBoard = require('../modules/factories/gameboard');
const Ship = require('../modules/factories/shipfactory');
const Player = require('../modules/factories/playerfactory');

// grid one is grid, grid two is gridd.
const grids = document.querySelectorAll('.grid');
const gridds = document.querySelectorAll('.gridd');
const directionBtn = document.getElementById('changeDirection');

// Outro related dom elements
const returnHome = document.getElementById('returnHome');
const playAgain = document.getElementById('playAgain');
// Modal related dom elements
const input1 = document.getElementById('playerOne');
const input2 = document.getElementById('playerTwo');
const p1Btn = document.getElementById('playerOneBtn');
const p2Btn = document.getElementById('playerTwoBtn');
// Starting game 
const startGame = document.getElementById('playGame'); // player vs player



// 🚢🚢🚢 Game Assets are all listed below
//let currentDirection = 'X';
let currentDirection = direction;
let foo = 'destroyer';
let foo2 = 'destroyer';
let playerOne;
let playerTwo;
let turn = 'Player One';

const newBoard = new gameBoard();
const board = newBoard.createBoard();
let covered = []; // this arr keeps track of all the indexes that are covered in the board.
// 
const newBoard2 = new gameBoard();
const board2 = newBoard2.createBoard2();
let covered2 = []; // this arr keeps track of all the indexes that are covered in the board.

const destroyer = new Ship('destroyer', 2);
const submarine = new Ship('submarine', 2);
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 4);
const carrier = new Ship('carrier', 5);

const destroyer2 = new Ship('destroyer', 2);
const submarine2 = new Ship('submarine', 2);
const cruiser2 = new Ship('cruiser', 3);
const battleship2 = new Ship('battleship', 4);
const carrier2 = new Ship('carrier', 5);


function changeDirection() {
    if (currentDirection === 'X') {
        currentDirection = 'Y';
    } else if (currentDirection === 'Y') {
        currentDirection = 'X';
    }
};


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
                    let interval = 1;
                    let promise = Promise.resolve();

                    grids.forEach(el => {
                        promise = promise.then(() => {
                            el.style.background = '#22aeff';
                            el.classList.add('popup');
                            return new Promise((resolve) => {
                                setTimeout(resolve, interval);
                            });
                        });
                    });
                }, 1000);
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
                    let interval = 1;
                    let promise = Promise.resolve();

                    grids.forEach(el => {
                        promise = promise.then(() => {
                            el.style.background = '#22aeff';
                            el.classList.add('popup');
                            return new Promise((resolve) => {
                                setTimeout(resolve, interval);
                            });
                        });
                    });
                }, 1000);
            }
        };
    };
};

function shipPlacement2(e, length) {
    const target = e.target;
    const index = Number(target.getAttribute('index'));

    const arr = []; // make sure the first number >= 0 && last number <= 99.

    if (currentDirection === 'X') {
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
                    let interval = 1;
                    let promise = Promise.resolve();

                    gridds.forEach(el => {
                        promise = promise.then(() => {
                            el.style.background = '#22aeff';
                            el.classList.add('popup');
                            return new Promise((resolve) => {
                                setTimeout(resolve, interval);
                            });
                        });
                    });
                }, 1000);
            }
        } 
    };

    if (currentDirection === 'Y') {
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
                    newBoard2.placeShipY2(length, foo2, one, two);
                    foo2 = 'submarine';
                } else if (foo2 === 'submarine') {
                    newBoard2.placeShipY2(length, foo2, one, two);
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

                newBoard2.placeShipY2(length, foo2, one, two, three)
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
                
                newBoard2.placeShipY2(length, foo2, one, two, three, four)
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

                newBoard2.placeShipY2(length, foo2, one, two, three, four, five);

                setTimeout(() => {
                    foo2 = 'attack';
                    let interval = 1;
                    let promise = Promise.resolve();

                    gridds.forEach(el => {
                        promise = promise.then(() => {
                            el.style.background = '#22aeff';
                            el.classList.add('popup');
                            return new Promise((resolve) => {
                                setTimeout(resolve, interval);
                            });
                        });
                    });
                }, 1000);
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
        if (grids[index].style.background !== 'red' && grids[index].style.background !== 'rgb(255, 255, 255)') {
            const shipType = board[index];
            grids[index].style.background = 'red';
            turn = 'Player Two';
            notifyPlayers(turn); // changes turn
            targetHit();

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
        if (grids[index].style.background !== 'rgb(255, 255, 255)' && grids[index].style.background !== 'red') {
            turn = 'Player Two'; 
            notifyPlayers(turn);
            targetMiss();
            grids[index].style.background = 'rgb(255, 255, 255)';
        }
    };
};

function attack2(e) {
    const target = e.target;
    const index = Number(target.getAttribute('index'));

    if (board2[index] !== '') {
        if (gridds[index].style.background !== 'red' && gridds[index].style !== 'rgb(255, 255, 255)') {
            const shipType = board2[index];
            gridds[index].style.background = 'red';
            turn = 'Player One';
            notifyPlayers(turn);
            targetHit();

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
        if (gridds[index].style.background !== 'rgb(255, 255, 255)' && gridds[index].style.background !== 'red') { 
            turn = 'Player One';
            notifyPlayers(turn);
            targetMiss();
            gridds[index].style.background = 'rgb(255, 255, 255)';
        }
    };
};


function checkBoard() {
    let count = 0;

    grids.forEach(el => {
        if (el.style.background === 'red') {
            count++;
        }
    });

    if (count === 16) {
        setTimeout(() => {
            const outro = document.querySelector('.outro');
            const winner = document.querySelector('.declareWinner');
            outro.style.display = 'grid';
            const message = document.createElement('p');
            message.classList.add('winnerStyle');

            if (winner.firstChild) {
                while(winner.firstChild) {
                    winner.removeChild(winner.firstChild);
                };
            };

            if (playerOne) {
                message.textContent = `${playerOne.name} wins 🏋️`;
            } else {
                message.textContent = 'Player One wins 🏋️';
            };

            winner.appendChild(message);
        }, 2000);
    };
};

function checkBoard2() {
    let count = 0;

    gridds.forEach(el => {
        if (el.style.background === 'red') {
            count++;
        }
    });

    if (count === 16) {
        setTimeout(() => {
            const outro = document.querySelector('.outro');
            const winner = document.querySelector('.declareWinner');
            outro.style.display = 'grid';
            const message = document.createElement('p');
            message.classList.add('winnerStyle');

            if (winner.firstChild) {
                while(winner.firstChild) {
                    winner.removeChild(winner.firstChild);
                };
            };

            if (playerTwo) {
                message.textContent = `${playerTwo.name} wins 🏋️`;
            } else {
                message.textContent = 'Player Two wins 🏋️';
            }
            
            winner.appendChild(message);
        }, 2000);
    };
};

// Event Listeners 

grids.forEach(el => {
    // 1. Event One
    el.addEventListener('mouseover', () => {
        if (el.matches(':hover')) {
            if (foo === 'destroyer' || foo === 'submarine') {
                if (currentDirection === 'X') {
                    const one = el;
                    const two = el.nextElementSibling;
                    const arr = [one, two];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)'
                        }
                    });
                    // make sure it doesn't change color of already placed ships
                } else if (currentDirection === 'Y') {
                    const one = el;
                    const onei = Number(el.getAttribute('index'));
                    const twoi = Number(onei + 10);
                    const two = document.querySelector(`[index='${twoi}']`);
                    const arr = [one, two];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)'
                        }
                    });
                }
            } else if (foo === 'cruiser') {
                if (currentDirection === 'X') {
                    const one = el;
                    const two = el.nextElementSibling;
                    const three = two.nextElementSibling;
                    const arr = [one, two, three];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)'
                        }
                    });
                } else if (currentDirection === 'Y') {
                    const one = el;
                    const onei = Number(el.getAttribute('index'));
                    const twoi = Number(onei + 10);
                    const two = document.querySelector(`[index='${twoi}']`);
                    const threei = Number(onei + 20);
                    const three = document.querySelector(`[index='${threei}']`);
                    const arr = [one, two, three];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }
                    console.log('going');
                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)'
                        }
                    });
                }
            } else if (foo === 'battleship') {
                if (currentDirection === 'X') {
                    const one = el;
                    const two = el.nextElementSibling;
                    const three = two.nextElementSibling;
                    const four = three.nextElementSibling;
                    const arr = [one, two, three, four];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)'
                        }
                    });
                } else if (currentDirection === 'Y') {
                    const one = el;
                    const onei = Number(el.getAttribute('index'));
                    const twoi = Number(onei + 10);
                    const two = document.querySelector(`[index='${twoi}']`);
                    const threei = Number(onei + 20);
                    const three = document.querySelector(`[index='${threei}']`);
                    const fouri = Number(onei + 30);
                    const four = document.querySelector(`[index='${fouri}']`);
                    const arr = [one, two, three, four];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)'
                        }
                    });
                }
            } else if (foo === 'carrier') {
                if (currentDirection === 'X') {
                    const one = el;
                    const two = el.nextElementSibling;
                    const three = two.nextElementSibling;
                    const four = three.nextElementSibling;
                    const five = four.nextElementSibling;
                    const arr = [one, two, three, four, five];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)';
                        }
                    });
                } else if (currentDirection === 'Y') {
                    const one = el;
                    const onei = Number(el.getAttribute('index'));
                    const twoi = Number(onei + 10);
                    const two = document.querySelector(`[index='${twoi}']`);
                    const threei = Number(onei + 20);
                    const three = document.querySelector(`[index='${threei}']`);
                    const fouri = Number(onei + 30);
                    const four = document.querySelector(`[index='${fouri}']`);
                    const fivei = Number(onei + 40);
                    const five = document.querySelector(`[index='${fivei}']`)
                    const arr = [one, two, three, four, five];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)';
                        }
                    });
                }
            }
    }});
    // 2. Event Two
    el.addEventListener('mouseout', () => {
        if (foo === 'destroyer' || foo === 'submarine') {
            if (currentDirection === 'X') {
                const one = el;
                const two = el.nextElementSibling;
                const arr = [one, two];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            } else if (currentDirection === 'Y') {
                const one = el;
                const onei = Number(el.getAttribute('index'));
                const twoi = Number(onei + 10);
                const two = document.querySelector(`[index='${twoi}']`);
                const arr = [one, two];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            }
        } else if (foo === 'cruiser') {
            if (currentDirection === 'X') {
                const one = el;
                const two = el.nextElementSibling;
                const three = two.nextElementSibling;
                const arr = [one, two, three];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            } else if (currentDirection === 'Y') {
                const one = el;
                const onei = Number(el.getAttribute('index'));
                const twoi = Number(onei + 10);
                const two = document.querySelector(`[index='${twoi}']`);
                const threei = Number(onei + 20);
                const three = document.querySelector(`[index='${threei}']`)
                const arr = [one, two, three];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            }
        } else if (foo === 'battleship') {
            if (currentDirection === 'X') {
                const one = el;
                const two = el.nextElementSibling;
                const three = two.nextElementSibling;
                const four = three.nextElementSibling;
                const arr = [one, two, three, four];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            } else if (currentDirection === 'Y') {
                const one = el;
                const onei = Number(el.getAttribute('index'));
                const twoi = Number(onei + 10);
                const two = document.querySelector(`[index='${twoi}']`);
                const threei = Number(onei + 20);
                const three = document.querySelector(`[index='${threei}']`)
                const fouri = Number(onei + 30);
                const four = document.querySelector(`[index='${fouri}']`);
                const arr = [one, two, three, four];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            }
        } else if (foo === 'carrier') {
            if (currentDirection === 'X') {
                const one = el;
                const two = el.nextElementSibling;
                const three = two.nextElementSibling;
                const four = three.nextElementSibling;
                const five = four.nextElementSibling;
                const arr = [one, two, three, four, five];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            } else if (currentDirection === 'Y') {
                const one = el;
                const onei = Number(el.getAttribute('index'));
                const twoi = Number(onei + 10);
                const two = document.querySelector(`[index='${twoi}']`);
                const threei = Number(onei + 20);
                const three = document.querySelector(`[index='${threei}']`)
                const fouri = Number(onei + 30);
                const four = document.querySelector(`[index='${fouri}']`);
                const fivei = Number(onei + 40);
                const five = document.querySelector(`[index='${fivei}']`);
                const arr = [one, two, three, four, five];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            }
        }
    });
    // 3. Event Three
    el.addEventListener('click', (e) => {
        if (foo !== 'attack') {
            setShips(e);
        }

        if (foo === 'attack' && turn === 'Player One') { 
            attack(e);
            checkBoard();
        }
    }); 
});

gridds.forEach(el => {
    // 1. Event One
    el.addEventListener('mouseover', () => {
        if (el.matches(':hover')) {
            if (foo2 === 'destroyer' || foo2 === 'submarine') {
                if (currentDirection === 'X') {
                    const one = el;
                    const two = el.nextElementSibling;
                    const arr = [one, two];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)'
                        }
                    });
                } else if (currentDirection === 'Y') {
                    const one = el;
                    const onei = Number(el.getAttribute('index'));
                    const twoi = Number(onei + 10);
                    const two = Array.from(document.querySelectorAll(`[index='${twoi}'], [class='.gridd']`)).filter(el => el.className === 'gridd');
                    const arr = [one, two[0]];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)'
                        }
                    });
                }
            } else if (foo2 === 'cruiser') {
                if (currentDirection === 'X') {
                    const one = el;
                    const two = el.nextElementSibling;
                    const three = two.nextElementSibling;
                    const arr = [one, two, three];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)'
                        }
                    });
                } else if (currentDirection === 'Y') {
                    const one = el;
                    const onei = Number(el.getAttribute('index'));
                    const twoi = Number(onei + 10);
                    const two = Array.from(document.querySelectorAll(`[index='${twoi}'], [class='.gridd']`)).filter(el => el.className === 'gridd');
                    const threei = Number(onei + 20);
                    const three = Array.from(document.querySelectorAll(`[index='${threei}'], [class='.gridd']`)).filter(el => el.className === 'gridd');

                    const arr = [one, two[0], three[0]];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)'
                        }
                    });
                }
            } else if (foo2 === 'battleship') {
                if (currentDirection === 'X') {
                    const one = el;
                    const two = el.nextElementSibling;
                    const three = two.nextElementSibling;
                    const four = three.nextElementSibling;
                    const arr = [one, two, three, four];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)'
                        }
                    });
                } else if (currentDirection === 'Y') {
                    const one = el;
                    const onei = Number(el.getAttribute('index'));
                    const twoi = Number(onei + 10);
                    const two = Array.from(document.querySelectorAll(`[index='${twoi}'], [class='.gridd']`)).filter(el => el.className === 'gridd');
                    const threei = Number(onei + 20);
                    const three = Array.from(document.querySelectorAll(`[index='${threei}'], [class='.gridd']`)).filter(el => el.className === 'gridd');
                    const fouri = Number(onei + 30);
                    const four = Array.from(Array.from(document.querySelectorAll(`[index='${fouri}'], [class='.gridd']`)).filter(el => el.className === 'gridd'));

                    const arr = [one, two[0], three[0], four[0]];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)'
                        }
                    });
                }
            } else if (foo2 === 'carrier') {
                if (currentDirection === 'X') {
                    const one = el;
                    const two = el.nextElementSibling;
                    const three = two.nextElementSibling;
                    const four = three.nextElementSibling;
                    const five = four.nextElementSibling;
                    const arr = [one, two, three, four, five];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)';
                        }
                    });
                } else if (currentDirection === 'Y') {
                    const one = el;
                    const onei = Number(el.getAttribute('index'));
                    const twoi = Number(onei + 10);
                    const two = Array.from(document.querySelectorAll(`[index='${twoi}'], [class='.gridd']`)).filter(el => el.className === 'gridd');
                    const threei = Number(onei + 20);
                    const three = Array.from(document.querySelectorAll(`[index='${threei}'], [class='.gridd']`)).filter(el => el.className === 'gridd');
                    const fouri = Number(onei + 30);
                    const four = Array.from(Array.from(document.querySelectorAll(`[index='${fouri}'], [class='.gridd']`)).filter(el => el.className === 'gridd'));
                    const fivei = Number(onei + 40);
                    const five = Array.from(Array.from(document.querySelectorAll(`[index='${fivei}'], [class='.gridd']`)).filter(el => el.className === 'gridd'));

                    const arr = [one, two[0], three[0], four[0], five[0]];

                    if (one.style.background === 'rgb(65, 255, 176)') {
                        return;
                    }

                    arr.forEach(el => {
                        if (el.style.background === 'rgb(65, 255, 176)') {
                            return;
                        } else {
                            el.style.background = 'rgb(68, 17, 255)';
                        }
                    });
                }
            }
    }});
    // 2. Event Two
    el.addEventListener('mouseout', () => {
        if (foo2 === 'destroyer' || foo2 === 'submarine') {
            if (currentDirection === 'X') {
                const one = el;
                const two = el.nextElementSibling;
                const arr = [one, two];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            } else if (currentDirection === 'Y') {
                const one = el;
                const onei = Number(el.getAttribute('index'));
                const twoi = Number(onei + 10);
                const two = Array.from(document.querySelectorAll(`[index='${twoi}'], [class='.gridd']`)).filter(el => el.className === 'gridd');
                const arr = [one, two[0]];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            }
        } else if (foo2 === 'cruiser') {
            if (currentDirection === 'X') {
                const one = el;
                const two = el.nextElementSibling;
                const three = two.nextElementSibling;
                const arr = [one, two, three];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            } else if (currentDirection === 'Y') {
                const one = el;
                const onei = Number(el.getAttribute('index'));
                const twoi = Number(onei + 10);
                const two = Array.from(document.querySelectorAll(`[index='${twoi}'], [class='.gridd']`)).filter(el => el.className === 'gridd');
                const threei = Number(onei + 20);
                const three = Array.from(document.querySelectorAll(`[index='${threei}'], [class='.gridd']`)).filter(el => el.className === 'gridd');

                const arr = [one, two[0], three[0]];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            }
        } else if (foo2 === 'battleship') {
            if (currentDirection === 'X') {
                const one = el;
                const two = el.nextElementSibling;
                const three = two.nextElementSibling;
                const four = three.nextElementSibling;
                const arr = [one, two, three, four];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            } else if (currentDirection === 'Y') {
                const one = el;
                const onei = Number(el.getAttribute('index'));
                const twoi = Number(onei + 10);
                const two = Array.from(document.querySelectorAll(`[index='${twoi}'], [class='.gridd']`)).filter(el => el.className === 'gridd');
                const threei = Number(onei + 20);
                const three = Array.from(document.querySelectorAll(`[index='${threei}'], [class='.gridd']`)).filter(el => el.className === 'gridd');
                const fouri = Number(onei + 30);
                const four = Array.from(Array.from(document.querySelectorAll(`[index='${fouri}'], [class='.gridd']`)).filter(el => el.className === 'gridd'));

                const arr = [one, two[0], three[0], four[0]];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            }
        } else if (foo2 === 'carrier') {
            if (currentDirection === 'X') {
                const one = el;
                const two = el.nextElementSibling;
                const three = two.nextElementSibling;
                const four = three.nextElementSibling;
                const five = four.nextElementSibling;
                const arr = [one, two, three, four, five];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            } else if (currentDirection === 'Y') {
                const one = el;
                const onei = Number(el.getAttribute('index'));
                const twoi = Number(onei + 10);
                const two = Array.from(document.querySelectorAll(`[index='${twoi}'], [class='.gridd']`)).filter(el => el.className === 'gridd');
                const threei = Number(onei + 20);
                const three = Array.from(document.querySelectorAll(`[index='${threei}'], [class='.gridd']`)).filter(el => el.className === 'gridd');
                const fouri = Number(onei + 30);
                const four = Array.from(Array.from(document.querySelectorAll(`[index='${fouri}'], [class='.gridd']`)).filter(el => el.className === 'gridd'));
                const fivei = Number(onei + 40);
                const five = Array.from(Array.from(document.querySelectorAll(`[index='${fivei}'], [class='.gridd']`)).filter(el => el.className === 'gridd'));

                const arr = [one, two[0], three[0], four[0], five[0]];

                arr.forEach(el => {
                    if (el.style.background === 'rgb(68, 17, 255)') {
                        el.style.background = '';
                    }
                });
            }
        }
    });
    // 3. Event Three
    el.addEventListener('click', (e) => {
        if (foo2 !== 'attack') {
            setShips2(e);
        }

        if (foo2 === 'attack' && turn === 'Player Two') {
            attack2(e);
            checkBoard2();
        }
    }); 
});



directionBtn.addEventListener('click', changeDirection);



p1Btn.addEventListener('click', () => {
    if (input1.value) {
        playerOne = new Player(input1.value);
        input1.value = '';
    } else {
        playerOne = new Player('Player One');
    }
});

p2Btn.addEventListener('click', () => {
    if (input2.value) {
        playerTwo = new Player(input2.value);
        input2.value = '';
    } else {
        playerTwo = new Player('Player Two');
    }
});


// Starting game initally player vs player
startGame.addEventListener('click', () => {
    // 1. Close the current modal and the intro page
    const intro = document.querySelector('.intro');
    intro.style.display = 'none';
    closeModalPvP();   
    showPvP();
});


// playing again or returning to home
returnHome.addEventListener('click', () => {
    const outro = document.querySelector('.outro');
    const intro = document.querySelector('.intro');

    // 1. Clear the outro and display intro
    outro.style.display = 'none';
    intro.style.display = 'grid';

    // 2. Clear the dom and also the dom board array
    grids.forEach(el => {
        el.style.background = '#22aeff';
        el.classList.remove('popup');
    });

    gridds.forEach(el => {
        el.style.background = '#22aeff';
        el.classList.remove('popup');
    });

    // 3. Resetting all conditions to start the game again
    newBoard.clearBoard(board);
    newBoard2.clearBoard(board2);
    foo = 'destroyer';
    foo2 = 'destroyer';
    covered = [];
    covered2 = [];
    
    // 4. Reset the winner declaration message in the outro modal
    const winner = document.querySelector('.declareWinner');
    while (winner.firstChild) {
        winner.removeChild(winner.lastChild);
    };

    // 5. Reset turn back to player one
    turn = 'Player One';

    // 6. close the pvp & pvc board 
    closePvP();
    clearNotifyBoard();
});

playAgain.addEventListener('click', () => {
    const outro = document.querySelector('.outro');

    // 1. Clear the outro and display intro
    outro.style.display = 'none';

    // 2. Clear the dom and also the dom board array
    grids.forEach(el => {
        el.style.background = '#22aeff';
        el.classList.remove('popup');
    });

    gridds.forEach(el => {
        el.style.background = '#22aeff';
        el.classList.remove('popup');
    });
    
    // 3. Resetting all conditions to start the game again
    newBoard.clearBoard(board);
    newBoard2.clearBoard(board2);
    foo = 'destroyer';
    foo2 = 'destroyer';
    covered = [];
    covered2 = [];

    // 4. Reset the winner declaration message in the outro modal
    const winner = document.querySelector('.declareWinner');
    while (winner.firstChild) {
        winner.removeChild(winner.lastChild);
    };

    // 5. Reset turn back to player one
    turn = 'Player One';
    clearNotifyBoard();
});
