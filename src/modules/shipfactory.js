// 🚢 Ship Factory Function

function Ship(length, sunk) {
    let sunked = sunk;
    const marked = []; // where they have been hit

    const hit = (number) => {
        marked.push(number);
    }

    const isSunk = () => {
        if (length === marked.length) {
            sunked = true;
            return sunked;
        }
    }

    return { length, sunk, marked, hit, isSunk };
};


module.exports = Ship;
