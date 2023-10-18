const leapYears = function(year) {
	return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
};

// Do not edit below this line
module.exports = leapYears;
