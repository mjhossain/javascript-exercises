const sumAll = function(start, times) {
    let sum = 0;

    if(typeof(times) != Number) {
        console.log('this ran')
        return 'ERROR';
    } 
        
    if(start > times) {
        for(i = times; i <= start; i++) {
            return sum += i;
        }
    } else if (start < times) {
        for(i = start; i <= times; i++) {
            return sum += i;
        }
    }
    
   

};

// Do not edit below this line
module.exports = sumAll;
