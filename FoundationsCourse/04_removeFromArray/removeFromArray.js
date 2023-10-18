const removeFromArray = function(array, ...elementsToRemove) {
	return array.filter( (elemArray) => { 
		return !elementsToRemove.includes(elemArray)
	});
};

// Do not edit below this line
module.exports = removeFromArray;
