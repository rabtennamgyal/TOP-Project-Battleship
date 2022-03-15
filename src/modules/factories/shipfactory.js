// 🚢 Ship Factory Function

function Ship(name, length) {
    const len = length;
    let sunked = []; // this will be false intially since all newly created ship are not yet sunked.
    const marked = []; // all the places where the ship has been hit.

    const hit = (number) => {
        marked.push(number);
    }

    const isSunk = () => {
        if (len === marked.length) {
            sunked.push(true);
        }
    }

    return { name, length, sunked, marked, hit, isSunk };  
};


module.exports = Ship;