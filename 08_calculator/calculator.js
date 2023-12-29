const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce( (partialSum, currentNum) =>  partialSum + currentNum, 0);
};

const multiply = function(array) {
  return array.reduce((partialProduct, a) => partialProduct * a);
};

const power = function(num, power) {
	return num**power;
};

const factorial = function(num) {
  let result = num;
  if (num === 0){
    return 1;
  }
  else {
    for (let i = 1; i < num; i++) {

      result = result*i;
    }
    return result;
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
