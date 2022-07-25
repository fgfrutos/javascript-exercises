const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let total = 0;
  if(arr){
    for (let num of arr) {
      total += num;
    }
  }
  return total;
};

const multiply = function(arr) {
  let total = 0;
  if(arr){
    for (let num of arr) {
      total = (total === 0)? num : num * total;
    }
  }
  return total;
};

const power = function(a, b) {
  return a**b;
};

// Recursion mode on!
const factorial = function(a) {
  if (a >= 1) {
    return a * factorial(a-1)
  } else {
    return (a === 0)? 1 : a;
  }
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
