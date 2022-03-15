const ships = document.querySelectorAll('.ship');
const grids = document.querySelectorAll('.grid');

let currentShipLength;
let count = 0;

// Give all the grids the index attribute starting with 0
grids.forEach(el => {
    el.setAttribute('index', count);
    count++;
});

// Change the Ship's direction between x-axis and y-axis.
function changeBasis(num) {
    if (num < 10) {
        return num;
    } else if (num > 10 && num < 20) {
        return num - 10;
    } else if (num > 20 && num < 30) {
        return num - 20;
    } else if (num > 30 && num < 40) {
        return num - 30;
    } else if (num > 40 && num < 50) {
        return num - 40;
    } else if (num > 50 && num < 60) {
        return num - 50;
    } else if (num > 60 && num < 70) {
        return num - 60;
    } else if (num > 70 && num < 80) {
        return num - 70;
    } else if (num > 80 && num < 90) {
        return num - 80;
    } else if (num > 90 && num < 100) {
        return num - 90;
    }
};


grids.forEach(el => {
    el.addEventListener('dragenter', (e) => {
        if (currentShipLength === 2) {
            const one = e.target;
            const two = e.target.nextElementSibling;
            one.style.background = 'blue';
            two.style.background = 'blue';
        } else if (currentShipLength === 3) {
            const one = e.target;
            const two = e.target.nextElementSibling;
            const three = two.nextElementSibling;
        } else if (currentShipLength === 4) {
            const one = e.target;
            const two = e.target.nextElementSibling;
            const three = two.nextElementSibling;
            const four = three.nextElementSibling;
        } else if (currentShipLength === 5) {
            const one = e.target;
            const two = e.target.nextElementSibling;
            const three = two.nextElementSibling;
            const four = three.nextElementSibling;
            const five = four.nextElementSibling;
        }
    });

    el.addEventListener('dragleave', (e) => {
        if (currentShipLength === 2) {
            const one = e.target;
            const two = e.target.nextElementSibling;
            one.style.background = '';
            two.style.background = '';
        } else if (currentShipLength === 3) {
            const one = e.target;
            const two = e.target.nextElementSibling;
            const three = two.nextElementSibling;
        } else if (currentShipLength === 4) {
            const one = e.target;
            const two = e.target.nextElementSibling;
            const three = two.nextElementSibling;
            const four = three.nextElementSibling;
        } else if (currentShipLength === 5) {
            const one = e.target;
            const two = e.target.nextElementSibling;
            const three = two.nextElementSibling;
            const four = three.nextElementSibling;
            const five = four.nextElementSibling;
        }
    });
});



export { changeBasis };
// Find the length of the current ship (dom element) in order to use it as a logic to place on the dom board.
// ships.forEach(el => {
//     el.addEventListener('dragstart', (e) => {
//         if (e.target.id === 'destroyer' || e.target.id === 'submarine') {
//             currentShipLength = 2;
//         } else if (e.target.id === 'cruiser') {
//             currentShipLength = 3;
//         } else if (e.target.id === 'battleship') {
//             currentShipLength = 4;
//         } else if (e.target.id === 'carrier') {
//             currentShipLength = 5;
//         }
//     });
// });


