/*Use destructured assignation and ternary operator to 
check which argument is grater. Then sum ussing a simple for loop*/

const sumAll = function(a, b) {
    if ((typeof a === 'number' & typeof b === 'number') & (a > 0 & b > 0)) {
        let first, last;
        let sum = 0;
        [first, last] = (a < b) ? [a, b]: [b, a];
        for (let i = first; i <= last; i++){
            sum += i;
        }
        return sum;
    }
    else return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
