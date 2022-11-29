const removeFromArray = function(usrArr, ...elem) {
        return usrArr.filter(x => !elem.includes(x))  
};

// Do not edit below this line
module.exports = removeFromArray;
