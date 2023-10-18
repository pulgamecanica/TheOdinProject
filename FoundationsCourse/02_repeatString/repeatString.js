const repeatString = function(str, times) {
	if (times < 0) return "ERROR";

	let strRepeated = "";
	for (let i = 0; i < times; ++i)
		strRepeated = strRepeated.concat(str);
	return strRepeated;
};

// Do not edit below this line
module.exports = repeatString;
