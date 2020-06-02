function secondLargest(numbers) {
  var big = numbers[0];
  var secondLargest = null;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > big) {
      secondLargest = big;
      big = numbers[i];
    } else if (numbers[i] > secondLargest) {
      secondLargest = numbers[i];
    }
  }
  return secondLargest;
}

module.exports = secondLargest;
