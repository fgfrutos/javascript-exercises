/* Remove elements of an array cheking if the element is in the arguments
array. It takes use of the filter built-in function that evaluates a function
and checks if the return value is true or false.*/

const removeFromArray = function(arr) {
    let toRemove = Array.from(arguments);
    toRemove.shift();
    arr = arr.filter(function(item) {return !toRemove.includes(item)});
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
