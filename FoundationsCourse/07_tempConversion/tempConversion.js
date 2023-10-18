const convertToCelsius = function(fahrenheit) {
  return +((fahrenheit - 32) * (5/9)).toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  return +((celsius * (9/5)) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
