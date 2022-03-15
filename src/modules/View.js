import { changeBasis } from './util/domutil';

const gameBoard = require('../modules/factories/gameboard');
const Ship = require('../modules/factories/shipfactory');
const grids = document.querySelectorAll('.grid');
const directionBtn = document.getElementById('changeDirection');

let currentDirection = 'X';

const newBoard = new gameBoard();
const board = newBoard.createBoard();

const destroyer = new Ship('destroyer', 2);
const submarine = new Ship('submarine', 2);
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 4);
const carrier = new Ship('carrier', 5);
// The ship will be created using the dom later.

const missedShots = newBoard.missedShots;

// newBoard.placeShip(87, 2, destroyer.name);
// newBoard.placeShip(12, 2, submarine.name);
// newBoard.placeShip(1, 3, cruiser.name);
// newBoard.placeShip(55, 4, battleship.name);
// newBoard.placeShip(44, 5, carrier.name);
// The ship will be placed using the dom later.

console.log(board);


function changeDirection() {
    if (currentDirection === 'X') {
        currentDirection = 'Y';
    } else if (currentDirection === 'Y') {
        currentDirection = 'X';
    }
}


function shipPlacement(e, length) {
    const target = e.target;
    const index = Number(target.getAttribute('index'));

    const arr = []; // make sure the first number >= 0 && last number <= 99.
    console.log(`${index}: index`);

    if (currentDirection === 'X') {
        let length = 4;
        // add + length - 1
        const position = changeBasis(index);

        if (length === 2 && position + length <= 10) {
            arr.push(index, index + 1);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });

            newBoard.placeShip(arr[0], length, destroyer.name);
        } else if (length === 3 && position + length <= 10) {
            arr.push(index, index + 1, index + 2);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });
        } else if (length === 4 && position + length <= 10) {
            arr.push(index, index + 1, index + 2, index + 3);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });
        } else if (length === 5 && position + length <= 10) {
            arr.push(index, index + 1, index + 2, index + 3, index + 4);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });

            newBoard.placeShip(arr[0], length, carrier.name);
        }
    } 

    if (currentDirection === 'Y') {
        let length = 5;
        // add + 10
        const position = changeBasis(index);
        console.log(position)

        if (length === 2) {
            arr.push(index, index + 10);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });
        } else if (length === 3) {
            arr.push(index, index + 10, index + 20);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });
        } else if (length === 4) {
            arr.push(index, index + 10, index + 20, index + 30);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });
        } else if (length === 5) {
            arr.push(index, index + 10, index + 20, index + 30, index + 40);
            const divs = Array.from(grids);
            const curDivs = [];

            arr.forEach(el => {
                curDivs.push(divs[el]);
            });

            curDivs.forEach(el => {
                el.style.background = '#41ffb0';
            });
        }

        console.log(arr);
    }
}


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
    el.addEventListener('click', shipPlacement);
});

directionBtn.addEventListener('click', changeDirection);