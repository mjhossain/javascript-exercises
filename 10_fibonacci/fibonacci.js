const fibonacci = function(n) {

    if(n<0) return "OOPS";

    let fib = new Array(n+2)
    let i;

    fib[0] = 0;
    fib[1] = 1;

    for(i=2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    // console.log(fib)
    return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;
