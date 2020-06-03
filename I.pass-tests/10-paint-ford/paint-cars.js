module.exports = function paintShop(cars, colour) {
  return cars.map((car) => {
    if (car.colour !== "Red") {
      return car;
    } else {
      return { ...car, colour: colour };
    }
  });
};
