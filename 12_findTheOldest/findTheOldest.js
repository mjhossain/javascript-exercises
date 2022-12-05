const findTheOldest = function(people) {
    return oldestPerson = people.reduce((oldest, currentPerson) => {
        const oldAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
        return oldAge < currentAge ? currentPerson : oldest;
    })
};

const getAge = function(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
