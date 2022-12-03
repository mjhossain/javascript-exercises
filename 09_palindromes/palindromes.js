const palindromes = function (word) {
    const wordTest = word.split('');
    // console.log('Word:', word, 'Reverse Word:', wordTest.reverse().join(''));
    if(word.replace(/[^a-zA-Z]/g, "").toLowerCase() == word.replace(/[^a-zA-z]/g, "").toLowerCase().split('').reverse().join("")){
        return true;
    } else {
        return false;
    }  
};

// Do not edit below this line
module.exports = palindromes;
