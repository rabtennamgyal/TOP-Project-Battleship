import { 
    changeBasisX, changeBasisY, closeModalPvC, notifyPlayers, 
    targetHit, targetMiss, showPvC, closePvC
} from './util/domutil';


const gameBoard = require('../modules/factories/gameboard');
const Ship = require('../modules/factories/shipfactory');
const Player = require('../modules/factories/playerfactory');


// AI board related dom elements 
const startGameAI = document.getElementById('playAI');
const soloPlayer = document.getElementById('soloPlayer'); 
const soloPlayerBtn = document.getElementById('soloPlayerBtn');

let thePlayer;

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
        console.log(thePlayer);
        soloPlayer.value = '';
    } else {
        thePlayer = new Player('Player One');
        console.log(thePlayer);
    }
});


