function sales(carsSold) {
  var totals = {};

  carsSold.forEach(function (element) {
    var accumulatedPrice = !totals[element.make] ? 0 : totals[element.make];
    totals[element.make] = accumulatedPrice + element.price;
  });
  return totals;
}
module.exports = sales;
