const convertToCelsius = function(temp) {
 let toCelc = ((temp - 32) * (5/9));
 toCelc = Math.round(toCelc * 10) / 10;
return toCelc;

};


const convertToFahrenheit = function(temp) {
let toFahr = ((temp * (9/5)) + 32);
toFahr = Math.round(toFahr * 10) / 10;
return toFahr

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
