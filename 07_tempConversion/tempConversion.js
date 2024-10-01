const convertToCelsius = function(tempFahrenheit) {
  const tempCelcius = ((tempFahrenheit - 32) * (5 / 9));
  return Math.round(tempCelcius * 10) / 10;
};

const convertToFahrenheit = function(tempCelcius) {
  const tempFahrenheit = (tempCelcius * (9 / 5) + 32);
  return Math.round(tempFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
