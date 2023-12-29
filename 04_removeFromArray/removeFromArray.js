const removeFromArray = function(array, ...args) {
    let index = array.indexOf(args);
    array.splice(index, 1);
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
