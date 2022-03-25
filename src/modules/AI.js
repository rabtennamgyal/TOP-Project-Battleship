import { 
    changeBasisX, changeBasisY, closeModalPvC, notifyPlayers, 
    targetHit, targetMiss, showPvC, closePvC, direction
} from './util/domutil';


const gameBoard = require('../modules/factories/gameboard');
const Ship = require('../modules/factories/shipfactory');
const Player = require('../modules/factories/playerfactory');


// AI board related dom elements 
const startGameAI = document.getElementById('playAI');
const soloPlayer = document.getElementById('soloPlayer'); 
const soloPlayerBtn = document.getElementById('soloPlayerBtn');
const soloPlayerGrids = document.querySelectorAll('.soloGrid');
const AIGrids = document.querySelectorAll('.aiGrid');
const directionBtn = document.getElementById('changeDirection');

let thePlayer;
let currentDirection = direction;
let foo = 'destroyer';
let foo2 = 'destroyer';
let turn = 'Player One';
//let foo2 = 'destroyer';

const newBoard = new gameBoard();
const board = newBoard.createBoard();
let covered = [];

const newBoard2 = new gameBoard();
const board2 = newBoard2.createBoard();
let covered2 = [];


// player' ship asset
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

directionBtn.addEventListener('click', changeDirection);

// 1. Starting game player vs computer, closing the modal and opening the boards.
startGameAI.addEventListener('click', () => {
    // 1. Close the current modal and the intro page
    const intro = document.querySelector('.intro');
    intro.style.display = 'none';
    closeModalPvC(); 
    showPvC();
});

// 2. Create player object 
soloPlayerBtn.addEventListener('click', () => {
    if (soloPlayer.value) {
        thePlayer = new Player(soloPlayer.value);
        soloPlayer.value = '';
    } else {
        thePlayer = new Player('Player One');
    }
});


// 3. Function to set the ship on the board 
function shipPlacement(e, length) {
    const target = e.target;
    const soloIndex = Number(target.getAttribute('soloIndex'));

    const arr = []; // make sure the first number >= 0 && last number <= 99.

    if (currentDirection === 'X') {
        const position = changeBasisX(soloIndex);

        if (length === 2 && position + length <= 10 && foo === 'destroyer' || foo === 'submarine') {
            const one = soloIndex;
            const two = soloIndex + 1;
            
            if (covered.includes(one) || covered.includes(two)) {
                return;
            } else {
                arr.push(soloIndex, soloIndex + 1);
                covered.push(soloIndex, soloIndex + 1);
                const divs = Array.from(soloPlayerGrids);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });

                if (foo === 'destroyer') {
                    newBoard.placeShipX(soloIndex, length, destroyer.name, destroyer.name);
                    foo = 'submarine';
                } else if (foo === 'submarine') {
                    newBoard.placeShipX(soloIndex, length, submarine.name, submarine.name);
                    foo = 'cruiser';
                }
            }
        } else if (length === 3 && position + length <= 10) {
            const one = soloIndex; 
            const two = soloIndex + 1;
            const three = soloIndex + 2;

            if (covered.includes(one) || covered.includes(two) || covered.includes(three)) {
                return;
            } else {
                arr.push(soloIndex, soloIndex + 1, soloIndex + 2);
                covered.push(soloIndex, soloIndex + 1, soloIndex + 2);
                const divs = Array.from(soloPlayerGrids);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });

                newBoard.placeShipX(soloIndex, length, cruiser.name, cruiser.name, cruiser.name);
                foo = 'battleship';
            }
        } else if (length === 4 && position + length <= 10) {
            const one = soloIndex;
            const two = soloIndex + 1;
            const three = soloIndex + 2;
            const four = soloIndex + 3;

            if (covered.includes(one) || covered.includes(two) || covered.includes(three) || covered.includes(four)) {
                return;
            } else {
                arr.push(soloIndex, soloIndex + 1, soloIndex + 2, soloIndex + 3);
                covered.push(soloIndex, soloIndex + 1, soloIndex + 2, soloIndex + 3);
                const divs = Array.from(soloPlayerGrids);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
    
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });

                newBoard.placeShipX(soloIndex, length, battleship.name, battleship.name, battleship.name, battleship.name);
                foo = 'carrier';
            }
        } else if (length === 5 && position + length <= 10) { // or could be lenght < 10
            const one = soloIndex; 
            const two = soloIndex + 1;
            const three = soloIndex + 2;
            const four = soloIndex + 3;
            const five = soloIndex + 4;

            if (covered.includes(one) || covered.includes(two) || covered.includes(three) || covered.includes(four) || covered.includes(five)) {
                return;
            } else {
                arr.push(soloIndex, soloIndex + 1, soloIndex + 2, soloIndex + 3, soloIndex + 4);
                covered.push(soloIndex, soloIndex + 1, soloIndex + 2, soloIndex + 3, soloIndex + 4);
                const divs = Array.from(soloPlayerGrids);
                const curDivs = [];
    
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
                
                curDivs.forEach(el => {
                    el.style.background = '#41ffb0';
                });
                
                newBoard.placeShipX(soloIndex, length, carrier.name, carrier.name, carrier.name, carrier.name, carrier.name);

                setTimeout(() => {
                    foo = 'attack';
                    let interval = 1;
                    let promise = Promise.resolve();

                    soloPlayerGrids.forEach(el => {
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
        const position = changeBasisY(soloIndex);

        if (length === 2 && position + length <= 82 && foo === 'destroyer' || foo === 'submarine') {
            const one = soloIndex;
            const two = soloIndex + 10;

            if (covered.includes(one) || covered.includes(two)) {
                return;
            } else {
                arr.push(soloIndex, soloIndex + 10);
                covered.push(soloIndex, soloIndex + 10);
                const divs = Array.from(soloPlayerGrids);
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
            const one = soloIndex; 
            const two = soloIndex + 10;
            const three = soloIndex + 20;

            if (covered.includes(one) || covered.includes(two) || covered.includes(three)) {
                return;
            } else {
                arr.push(soloIndex, soloIndex + 10, soloIndex + 20);
                covered.push(soloIndex, soloIndex + 10, soloIndex + 20)
                const divs = Array.from(soloPlayerGrids);
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
            const one = soloIndex;
            const two = soloIndex + 10;
            const three = soloIndex + 20;
            const four = soloIndex + 30;

            if (covered.includes(one) || covered.includes(two) || covered.includes(three) || covered.includes(four)) {
                return;
            } else {
                arr.push(soloIndex, soloIndex + 10, soloIndex + 20, soloIndex + 30);
                covered.push(soloIndex, soloIndex + 10, soloIndex + 20, soloIndex + 30);
                const divs = Array.from(soloPlayerGrids);
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
            const one = soloIndex; 
            const two = soloIndex + 10;
            const three = soloIndex + 20;
            const four = soloIndex + 30;
            const five = soloIndex + 40;

            if (covered.includes(one) || covered.includes(two) || covered.includes(three) || covered.includes(four) || covered.includes(five)) {
                return;
            } else {
                arr.push(soloIndex, soloIndex + 10, soloIndex + 20, soloIndex + 30, soloIndex + 40);
                covered.push(soloIndex, soloIndex + 10, soloIndex + 20, soloIndex + 30, soloIndex + 40);
                const divs = Array.from(soloPlayerGrids);
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

                    soloPlayerGrids.forEach(el => {
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


// 4. Function that call the function that place ship on the board 
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


// 5. Computer automatically places ship
function aiShipPlacement() {
    let random = Math.ceil(Math.random() * 99);
    const position = changeBasisX(random);
    const arr = [];

    if (!covered2.includes(random) && position + length <= 10 && foo === 'destroyer' || foo === 'submarine') {
        const one = random;
        const two = random + 1;

        if (covered.includes(one) || covered.includes(two)) {
            return;
        } else {
            arr.push(random, random + 1);
            covered2.push(random, random + 1);
            const divs = Array.from(AIGrids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });

            if (foo === 'destroyer') {
                newBoard2.placeShipX(one, 2, destroyer.name, destroyer.name);
                foo = 'submarine';
            } else if (foo === 'submarine') {
                newBoard2.placeShipX(one, 2, submarine.name, submarine.name);
                foo = 'cruiser';
            }
        };
    };


    console.log(random, position);
    console.log(board2);
};

aiShipPlacement();
aiShipPlacement();


// 5. Attack Function for Player 🐱‍🏍
function attack(e) {
    const target = e.target;
    const soloIndex = Number(target.getAttribute('soloIndex'));

    if (board[soloIndex] !== '') {
        if (soloPlayerGrids[soloIndex].style.background !== 'red' && soloPlayerGrids[soloIndex].style.background !== 'rgb(255, 255, 255)') {
            soloPlayerGrids[soloIndex].style.background = 'red';
            turn = 'Computer';
            notifyPlayers(turn); // changes turn
            targetHit();
            board.splice(soloIndex, 1, '');
        }
    } else {
        if (soloPlayerGrids[soloIndex].style.background !== 'rgb(255, 255, 255)' && soloPlayerGrids[soloIndex].style.background !== 'red') {
            turn = 'Computer'; 
            notifyPlayers(turn);
            targetMiss();
            soloPlayerGrids[soloIndex].style.background = 'rgb(255, 255, 255)';
        }
    };
};


// . Attack function for Computer 👾
function computerAttack() {
    turn = 'Player One';
    console.log('computer attacked');
};


// 7. Check the board after every iteration to see if the game is won.
function checkBoard() {
    let count = 0;

    soloPlayerGrids.forEach(el => {
        if (el.style.background === 'red') {
            count++;
        }
    });

    if (count === 16) {
        setTimeout(() => {
            const content2 = document.querySelector('.mainContent2');
            const outro = document.querySelector('.outroAI');
            const winner = document.querySelector('.declareWinner2');
            outro.style.display = 'grid';
            const message = document.createElement('p');
            message.classList.add('winnerStyle');
            content2.style.display = 'none';
            if (thePlayer) {
                message.textContent = `${thePlayer.name} wins 🏋️`;
            } else {
                message.textContent = 'Player One wins 🏋️';
            }
            winner.appendChild(message);
        }, 2000);
    };
};


//  Make the player able to place ships.
soloPlayerGrids.forEach(el => {
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
                    const onei = Number(el.getAttribute('soloIndex'));
                    const twoi = Number(onei + 10);
                    const two = document.querySelector(`[soloIndex='${twoi}']`);
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
                    const onei = Number(el.getAttribute('soloIndex'));
                    const twoi = Number(onei + 10);
                    const two = document.querySelector(`[soloIndex='${twoi}']`);
                    const threei = Number(onei + 20);
                    const three = document.querySelector(`[soloIndex='${threei}']`);
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
                    const onei = Number(el.getAttribute('soloIndex'));
                    const twoi = Number(onei + 10);
                    const two = document.querySelector(`[soloIndex='${twoi}']`);
                    const threei = Number(onei + 20);
                    const three = document.querySelector(`[soloIndex='${threei}']`);
                    const fouri = Number(onei + 30);
                    const four = document.querySelector(`[soloIndex='${fouri}']`);
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
                    const onei = Number(el.getAttribute('soloIndex'));
                    const twoi = Number(onei + 10);
                    const two = document.querySelector(`[soloIndex='${twoi}']`);
                    const threei = Number(onei + 20);
                    const three = document.querySelector(`[soloIndex='${threei}']`);
                    const fouri = Number(onei + 30);
                    const four = document.querySelector(`[soloIndex='${fouri}']`);
                    const fivei = Number(onei + 40);
                    const five = document.querySelector(`[soloIndex='${fivei}']`)
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
                const onei = Number(el.getAttribute('soloIndex'));
                const twoi = Number(onei + 10);
                const two = document.querySelector(`[soloIndex='${twoi}']`);
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
                const onei = Number(el.getAttribute('soloIndex'));
                const twoi = Number(onei + 10);
                const two = document.querySelector(`[soloIndex='${twoi}']`);
                const threei = Number(onei + 20);
                const three = document.querySelector(`[soloIndex='${threei}']`)
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
                const onei = Number(el.getAttribute('soloIndex'));
                const twoi = Number(onei + 10);
                const two = document.querySelector(`[soloIndex='${twoi}']`);
                const threei = Number(onei + 20);
                const three = document.querySelector(`[soloIndex='${threei}']`)
                const fouri = Number(onei + 30);
                const four = document.querySelector(`[soloIndex='${fouri}']`);
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
                const onei = Number(el.getAttribute('soloIndex'));
                const twoi = Number(onei + 10);
                const two = document.querySelector(`[soloIndex='${twoi}']`);
                const threei = Number(onei + 20);
                const three = document.querySelector(`[soloIndex='${threei}']`)
                const fouri = Number(onei + 30);
                const four = document.querySelector(`[soloIndex='${fouri}']`);
                const fivei = Number(onei + 40);
                const five = document.querySelector(`[soloIndex='${fivei}']`);
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


