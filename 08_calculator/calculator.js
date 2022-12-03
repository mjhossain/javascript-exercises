const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(x) {
  if(x.length != 0) {
    const total = x.reduce((t,n) => {
      return t + n;
    })
    return total;
  } else {
    return 0;
  }
  
};

const multiply = function(x) {
  if(x.length != 0) {}
  const total = x.reduce((t,n) => {
    return t * n;
  })
  return total;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
	if(x === 0) {
    return 1;
  } else {
    return x * factorial(x-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
