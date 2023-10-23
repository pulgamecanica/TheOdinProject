const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce( (sum, item) => sum + item, 0 );
};

const multiply = function(arr) {
	return arr.reduce( (sum, item) => sum * item, 1 );
};

const power = function(num, exp) {
	if (exp === 1)
		return num;
	return num * power(num, exp - 1);
};

const factorial = function(num) {
	if (num == 0)
		return 1;
	return (num * factorial(num - 1))
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
