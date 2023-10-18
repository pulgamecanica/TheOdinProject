const sumAll = function(start, end) {
	if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) return "ERROR";

	if (start > end) {
		let tmp = start;
		start = end;
		end = tmp;
	}
	let sum = 0;
	while (start <= end)
		sum += start++;
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
