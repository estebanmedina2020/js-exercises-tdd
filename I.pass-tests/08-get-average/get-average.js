// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let num = numbers.filter((element) => typeof element === "number");
  let sum = num.reduce((previous, current) => (current += previous));
  let avg = sum / num.length;
  return avg;
}

module.exports = average;
