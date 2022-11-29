const reverseString = function(str) {
    strArr = str.split('')
    strArr.reverse()
    revStr = strArr.join('')
    return revStr
};

// Do not edit below this line
module.exports = reverseString;
