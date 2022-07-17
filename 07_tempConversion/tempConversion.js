function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const ftoc = function(f) {
  const celsius = (f-32)*5/9;
  return round(celsius, 1);
};

const ctof = function(c) {
  const farenheit = c*(9/5)+32;
  return round(farenheit, 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
  round
};
