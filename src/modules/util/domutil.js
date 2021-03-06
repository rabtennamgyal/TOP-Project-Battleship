// Player vs Player
const grids = document.querySelectorAll('.grid');
const gridd = document.querySelectorAll('.gridd');

// Player vs Computer
const soloPlayerGrids = document.querySelectorAll('.soloGrid');
const AIGrids = document.querySelectorAll('.aiGrid');

// Modal related dom elements
const pvpModal = document.querySelector('.pvpModal');
const pvcModal = document.querySelector('.pvcModal');

// show pvp or pvc board 
const pvpBoard = document.querySelector('.mainContent');
const pvcBoard = document.querySelector('.mainContent2');

let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let direction = 'X';

// Give all the grids the index attribute starting with 0
grids.forEach(el => {
    el.setAttribute('index', count);
    count++;
});

gridd.forEach(el => {
    el.setAttribute('index', count2);
    count2++;
});

soloPlayerGrids.forEach(el => {
    el.setAttribute('soloIndex', count3);
    count3++;
});

AIGrids.forEach(el => {
    el.setAttribute('aiIndex', count4);
    count4++;
});

// Change the Ship's direction between x-axis and y-axis.
function changeBasisX(num) {
    if (num < 10) {
        return num;
    } else if (num >= 10 && num < 20) {
        return num - 10;
    } else if (num >= 20 && num < 30) {
        return num - 20;
    } else if (num >= 30 && num < 40) {
        return num - 30;
    } else if (num >= 40 && num < 50) {
        return num - 40;
    } else if (num >= 50 && num < 60) {
        return num - 50;
    } else if (num >= 60 && num < 70) {
        return num - 60;
    } else if (num >= 70 && num < 80) {
        return num - 70;
    } else if (num >= 80 && num < 90) {
        return num - 80;
    } else if (num >= 90 && num < 100) {
        return num - 90;
    };
};

function changeBasisY(num) {
    if (num >= 0 && num < 10) {
        return num - num;
    } else if (num >= 10 && num < 20) {
        return (num - (num - 10));
    } else if (num >= 20 && num < 30) {
        return (num - (num - 20));
    } else if (num >= 30 && num < 40) {
        return (num - (num - 30));
    } else if (num >= 40 && num < 50) {
        return (num - (num - 40));
    } else if (num >= 50 && num < 60) {
        return (num - (num - 50));
    } else if (num >= 60 && num < 70) {
        return (num - (num - 60));
    } else if (num >= 70 && num < 80) {
        return (num - (num - 70));
    } else if (num >= 80 && num < 90) {
        return (num - (num - 80));
    } else if (num >= 90 && num < 100) {
        return (num - (num - 90));
    }
};

// Notify player's about whose turn is it.
function notifyPlayers(name) {
    //const box1 = document.querySelector('.turnOne');
    const box2 = document.querySelector('.turnTwo');
    const text = document.createElement('p');
    text.classList.add('textStyle');
    text.textContent = `${name}'s turn.`;

    if (box2.firstChild) {
        while(box2.firstChild) {
            box2.removeChild(box2.firstChild);
        };
    }

    box2.appendChild(text);
};

function clearNotifyBoard() {
    const box2 = document.querySelector('.turnTwo');

    if (box2.firstChild) {
        while(box2.firstChild) {
            box2.removeChild(box2.firstChild);
        };
    };
};

// Target hit sound effect
function targetHit() {
    const hit = document.getElementById('hit');
    hit.play();
};

function targetMiss() {
    const miss = document.getElementById('miss');
    miss.play();
};


function openModalPvP() {
    pvpModal.style.display = 'grid';
};

function closeModalPvP() {
    pvpModal.style.display = 'none';
};

function openModalPvC() {
    pvcModal.style.display = 'grid';
};

function closeModalPvC() {
    pvcModal.style.display = 'none';
};

function showPvP() {
    pvpBoard.style.display = 'grid';
};

function showPvC() {
    pvcBoard.style.display = 'grid';
};

function closePvP() {
    pvpBoard.style.display = 'none';
};

function closePvC() {
    pvcBoard.style.display = 'none';
};


export { 
    changeBasisX, changeBasisY, openModalPvP, 
    closeModalPvP, openModalPvC, closeModalPvC, 
    notifyPlayers, clearNotifyBoard, targetHit, targetMiss, 
    showPvP, showPvC, closePvP, closePvC, direction
};