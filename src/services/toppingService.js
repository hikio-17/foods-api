const Topping = require('../models/topping');
const Food = require('../models/food');

const addTopping = async ({ name, price, parent }) => {
  const topping = await new Topping({ name, price, parent }).save();

  const food = await Food.findById(parent);
  food.toppings.push(topping);
  await food.save();

  return topping;
};

const findAllTopping = async () => {
  const toppings = await Topping.find();
  return toppings;
};

const removeToppingById = async (id) => {
  await Topping.findByIdAndDelete(id);
};

module.exports = {
  addTopping,
  findAllTopping,
  removeToppingById,
};