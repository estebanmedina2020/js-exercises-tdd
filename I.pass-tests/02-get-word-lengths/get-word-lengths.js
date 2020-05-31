var getWordLengths = function (someWords) {
  return someWords.map(function (letter) {
    return letter.length;
  });
};

module.exports = getWordLengths;
