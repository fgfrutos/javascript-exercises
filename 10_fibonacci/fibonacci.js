// TODO: Do it with recursion
const fibonacci = function(nth) {
    // Normal solution:
    // let arr = [1, 1];
    // if (nth < 2) {
    //     return 1;
    // }
    // for (let i = 2; i < nth; i++) {
    //     arr.push(arr[i-1] + arr[i - 2]);
    // }
    // return arr[nth -1]

    // Reduce:
    if (nth > 0) {
        return Array(parseInt(nth)).fill(0).reduce((arr, val, i) => {
            return arr.concat(i > 1 ? arr[i - 1] + arr[i - 2] : 1);
        }, [])[nth-1];
    } else return "OOPS"

};


// Do not edit below this line
module.exports = fibonacci;
