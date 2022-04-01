import { 
    changeBasisX, changeBasisY, closeModalPvC, notifyPlayers, clearNotifyBoard,
    targetHit, targetMiss, showPvC, closePvC, direction
} from './util/domutil';
// Ships images
import ship1 from '../asset/img/ship1.png';
import ship2 from '../asset/img/ship2.png';
import ship3 from '../asset/img/ship3.png';
import ship4 from '../asset/img/ship4.png';
import ship5 from '../asset/img/ship5.png';


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
const returnHome = document.getElementById('returnHome2');
const playAgain = document.getElementById('playAgain2');

let thePlayer;
let currentDirection = direction;
let foo = 'destroyer';
let foo2 = 'destroyer';
let turn = 'Player One';
let aiBoardFilled = false;
let playing = false;

const newBoard = new gameBoard();
const board = newBoard.createBoard();
let covered = [];

const newBoard2 = new gameBoard();
const board2 = newBoard2.createBoard();
let covered2 = [];
let attacked = []; // arr keep tracks of all the index where the players board has been hit.
let attacked2 = []; // keep track of all the index where the AI board has been hit.

// randomPot will need to be set back to the inital value after starting / ending the game.

// player' ship asset
const destroyer = new Ship('destroyer', 2);
const submarine = new Ship('submarine', 2);
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 4);
const carrier = new Ship('carrier', 5);

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
    
                // curDivs.forEach(el => {
                //     el.style.background = '#41ffb0';
                // });

                if (foo === 'destroyer') {
                    const img = new Image();
                    img.src = ship1;
                    img.classList.add('ship1');
                    curDivs[0].appendChild(img);    
                    newBoard.placeShipX(soloIndex, length, destroyer.name, destroyer.name);
                    foo = 'submarine';
                } else if (foo === 'submarine') {
                    const img = new Image();
                    img.src = ship2;
                    img.classList.add('ship2');
                    curDivs[0].appendChild(img);    
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
    
                const img = new Image();
                img.src = ship3;
                img.classList.add('ship3');
                curDivs[0].appendChild(img);    
                // curDivs.forEach(el => {
                //     el.style.background = '#41ffb0';
                // });
                

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
    
                // curDivs.forEach(el => {
                //     el.style.background = '#41ffb0';
                // });
                const img = new Image();
                img.src = ship4;
                img.classList.add('ship4');
                curDivs[0].appendChild(img);   

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
                
                // curDivs.forEach(el => {
                //     el.style.background = '#41ffb0';
                // });
                const img = new Image();
                img.src = ship5;
                img.classList.add('ship5');
                curDivs[0].appendChild(img);   
                
                newBoard.placeShipX(soloIndex, length, carrier.name, carrier.name, carrier.name, carrier.name, carrier.name);

                setTimeout(() => {
                    foo = 'attack';
                    let interval = 1;
                    let promise = Promise.resolve();

                    soloPlayerGrids.forEach(el => {
                        promise = promise.then(() => {
                            // const img = new Image();
                            // img.classList.add('sea');
                            // img.src = sea;
                            //el.appendChild(img);
                            el.style.background = '#22aeff';
                            el.classList.add('popup');
                            return new Promise((resolve) => {
                                setTimeout(resolve, interval);
                            });
                        });
                    });
                }, 1000);

                setTimeout(() => {
                    let interval = 1;
                    let promise = Promise.resolve();

                    AIGrids.forEach(el => {
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
                    // let interval = 1;
                    // let promise = Promise.resolve();

                    // soloPlayerGrids.forEach(el => {
                    //     promise = promise.then(() => {
                    //         el.style.background = '#22aeff';
                    //         el.classList.add('popup');
                    //         return new Promise((resolve) => {
                    //             setTimeout(resolve, interval);
                    //         });
                    //     });
                    // });
                }, 1000);

                setTimeout(() => {
                    let interval = 1;
                    let promise = Promise.resolve();

                    AIGrids.forEach(el => {
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
function setShips(e, length) {
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
        playing = true;
    }
};


// 5. Function to place ship for AI
function aiShipPlacement() {
    let random = Math.ceil(Math.random() * 99);
    const position = changeBasisX(random);
    const arr = [];

    if (!covered2.includes(random) && position + 1 <= 10 && foo2 === 'destroyer' || foo2 === 'submarine') {
        if (position + 2 <= 10) {
            const one = random;
            const two = random + 1;
    
            if (covered2.includes(one) || covered2.includes(two)) {
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
                    //el.style.background = '#41ffb0';
                    el.style.background = 'red';
                });
    
                if (foo2 === 'destroyer') {
                    newBoard2.placeShipX(one, 2, destroyer.name, destroyer.name);
                    foo2 = 'submarine';
                } else if (foo2 === 'submarine') {
                    newBoard2.placeShipX(one, 2, submarine.name, submarine.name);
                    foo2 = 'cruiser';
                }
            }
        }
    } else if (!covered2.includes(random) && position + 2 <= 10 && foo2 === 'cruiser') {
        if (position + 3 <= 10) {
            const one = random;
            const two = random + 1;
            const three = random + 2;
        
            if (covered2.includes(one) || covered2.includes(two) || covered2.includes(three)) {
                return;
            } else {
                arr.push(random, random + 1, random + 2);
                covered2.push(random, random + 1, random + 2);
                const divs = Array.from(AIGrids);
                const curDivs = [];
        
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
        
                curDivs.forEach(el => {
                    //el.style.background = '#41ffb0';
                    el.style.background = 'blue';
                });
        
                newBoard2.placeShipX(one, 3, cruiser.name, cruiser.name, cruiser.name);
                foo2 = 'battleship';
            };
        }
    } else if (!covered2.includes(random) && position + 3 <= 10 && foo2 === 'battleship') {
        if (position + 4 <= 10) {
            const one = random;
            const two = random + 1;
            const three = random + 2;
            const four = random + 3;
        
            if (covered2.includes(one) || covered2.includes(two) || covered2.includes(three) || covered2.includes(four)) {
                return;
            } else {
                arr.push(random, random + 1, random + 2, random + 3);
                covered2.push(random, random + 1, random + 2, random + 3);
                const divs = Array.from(AIGrids);
                const curDivs = [];
        
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
        
                curDivs.forEach(el => {
                    //el.style.background = '#41ffb0';
                    el.style.background = 'orange';
                });
        
                newBoard2.placeShipX(one, 4, battleship.name, battleship.name, battleship.name, battleship.name);
                foo2 = 'carrier';
            };
        }
    } else if (!covered2.includes(random) && position + 4 <= 10 && foo2 === 'carrier') {
        if (position + 5 <= 10) {
            const one = random;
            const two = random + 1;
            const three = random + 2;
            const four = random + 3;
            const five = random + 4;
        
            if (covered2.includes(one) || covered2.includes(two) || covered2.includes(three) || covered2.includes(four) || covered.includes(five)) {
                return;
            } else {
                arr.push(random, random + 1, random + 2, random + 3, random + 4);
                covered2.push(random, random + 1, random + 2, random + 3, random + 4);
                const divs = Array.from(AIGrids);
                const curDivs = [];
        
                arr.forEach(el => {
                    curDivs.push(divs[el]);
                });
        
                curDivs.forEach(el => {
                    //el.style.background = '#41ffb0';
                    el.style.background = 'purple';
                });
        
                newBoard2.placeShipX(one, 5, carrier.name, carrier.name, carrier.name, carrier.name, carrier.name);
                foo2 = '';
                aiBoardFilled = true;
            } 
        }
    };
};


// 6. Function that call the aiShipPlacement function
function setAIShips() {
    if (foo2 === 'destroyer') {
        aiShipPlacement();
    }

    if (foo2 === 'submarine') {
        aiShipPlacement();
    }

    if (foo2 === 'cruiser') {
        aiShipPlacement();
    }

    if (foo2 === 'battleship') {
        aiShipPlacement();
    }

    if (foo2 === 'carrier') {
        aiShipPlacement();
    }
};


setInterval(() => {
    if (playing) {
        while (!aiBoardFilled) {
            setAIShips();
        };
    } 
}, 1000);


// 5. Attack Function for Player 🐱‍🏍 
// this function need more work

function attack(e) {
    const target = e.target;
    const aiindex = Number(target.getAttribute('aiindex'));

    if (board2[aiindex] !== '') {
        if (AIGrids[aiindex].style.background !== '#41ffb0' && AIGrids[aiindex].style.background !== 'rgb(255, 255, 255)') {
            AIGrids[aiindex].style.background = '#41ffb0';
            turn = 'Computer';
            notifyPlayers(turn); // changes turn
            targetHit();
            board2.splice(aiindex, 1, '');
        }
    } else {
        if (AIGrids[aiindex].style.background !== 'rgb(255, 255, 255)' && AIGrids[aiindex].style.background !== 'red') {
            turn = 'Computer'; 
            notifyPlayers(turn);
            targetMiss();
            AIGrids[aiindex].style.background = 'rgb(255, 255, 255)';
        }
    };
};


// . Attack function for Computer 👾
function computerAttack() {
    turn = 'Player One';
    let random = Math.ceil(Math.random() * 99);

    if (!attacked.includes(random)) {
        attacked.push(random);

        if (board[random] !== '') {
            if (soloPlayerGrids[random].style.background !== 'red' && soloPlayerGrids[random].style.background !== 'rgb(255, 255, 255)') {
                soloPlayerGrids[random].style.background = 'red';
                targetHit();
                board.splice(random, 1, '');
            
            }
        } else {
            if (soloPlayerGrids[random].style.background !== 'rgb(255, 255, 255)' && soloPlayerGrids[random].style.background !== 'red') {
                targetMiss();
                soloPlayerGrids[random].style.background = 'rgb(255, 255, 255)';
            }
        };
    } else {
        computerAttack();
        checkBoard();
    };
};


// 7. Check the board after every iteration to see if the game is won.
function checkBoard() {
    let count = 0;
    let count2 = 0;

    soloPlayerGrids.forEach(el => {
        if (el.style.background === 'red') {
            count++;
        }
    });

    AIGrids.forEach(el => {
        if (el.style.background === 'red') {
            count2++;
        }
    });

    if (count === 16) {
        setTimeout(() => {
            closePvC();
            const outro = document.querySelector('.outroAI');
            const winner = document.querySelector('.declareWinner2');
            outro.style.display = 'grid';
            const message = document.createElement('p');
            message.classList.add('winnerStyle');
            message.textContent = 'Computer wins 🏋️';

            if (winner.firstChild) {
                while(winner.firstChild) {
                    winner.removeChild(winner.firstChild);
                };
            };

            winner.appendChild(message);
        }, 2000);
    };

    if (count2 === 16) {
        setTimeout(() => {
            closePvC(); 
            const outro = document.querySelector('.outroAI');
            outro.style.display = 'grid';
            const winner = document.querySelector('.declareWinner2');
            const message = document.createElement('p');
            message.classList.add('winnerStyle');
            if (thePlayer) {
                message.textContent = `${thePlayer.name} wins 🏋️`;
            } else {
                message.textContent = 'Player One wins 🏋️';
            };

            if (winner.firstChild) {
                while(winner.firstChild) {
                    winner.removeChild(winner.firstChild);
                };
            };

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
        checkBoard();
    }); 
});


AIGrids.forEach(el => {
    el.addEventListener('click', (e) => {
        if (foo === 'attack') {
            const currentIndex = Number(e.target.getAttribute('aiIndex'));

            if (attacked2.includes(currentIndex)) {
                alert('try again');
            } else {
                attack(e);
                attacked2.push(currentIndex);

                setTimeout(() => {
                    computerAttack();
                    checkBoard();
                }, 2000);    
            }
        }
    });
});


// Starting over or playing again logic
returnHome.addEventListener('click', () => {
    const outro = document.querySelector('.outroAI');
    const intro = document.querySelector('.intro');

    // 1. Clear the outro and display intro
    outro.style.display = 'none';
    intro.style.display = 'grid';

    // 2. Clear the dom and also the dom board array
    soloPlayerGrids.forEach(el => {
        el.style.background = '#22aeff';
        el.classList.remove('popup');
    });

    AIGrids.forEach(el => {
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

    // 6.
    aiBoardFilled = false;
    playing = false;
    
    // 7.
    closePvC();
    clearNotifyBoard();
});

playAgain.addEventListener('click', () => {
    const outro = document.querySelector('.outroAI');

    // 1. Clear the outro and display intro
    outro.style.display = 'none';

    // 2. Clear the dom and also the dom board array
    soloPlayerGrids.forEach(el => {
        el.style.background = '#22aeff';
        el.classList.remove('popup');
    });

    AIGrids.forEach(el => {
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
    attacked = []; 
    attacked2 = []; 

    // 4. Reset the winner declaration message in the outro modal
    const winner = document.querySelector('.declareWinner2');
    while (winner.firstChild) {
        winner.removeChild(winner.lastChild);
    };

    // 5. Reset turn back to player one
    turn = 'Player One';

    // 6.
    aiBoardFilled = false;
    playing = false;

    // 7.
    showPvC();
    clearNotifyBoard();
});
