const getAge = (person) => {
	if (!person) return 0;
	let birth = person.yearOfBirth;
	let death = person.yearOfDeath;
	if (!death)
    death = new Date().getFullYear();
	return death - birth 
};

const findTheOldest = function(peopleArr) {
	return peopleArr.reduce( (oldest, person) => {
		return getAge(person) > getAge(oldest) ? person : oldest;
	});
};

// Do not edit below this line
module.exports = findTheOldest;
