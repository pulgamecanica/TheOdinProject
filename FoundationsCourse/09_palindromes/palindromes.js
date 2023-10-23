const palindromes = function (str) {
	const tmpStr = str.toLowerCase().split(/[^a-z0-9]/g).join("");
	const revStr = tmpStr.split("").reverse().join("");

	return tmpStr === revStr;
};

// Do not edit below this line
module.exports = palindromes;
