
const removeSNames = (names) => {
    let noSNames = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i][0].toLowerCase() != 's') {
           noSNames.push(names[i]);
        }
    }
    return noSNames;
};

// console.log(removeSNames(['test', 'stop']));
// console.log('test');

module.exports = removeSNames;