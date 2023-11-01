const Filling = require('../models/topping');
const Food = require('../models/food');

const addFilling = async ({ name, price, parent }) => {
  const filling = await new Filling({ name, price, parent }).save();

  const food = await Food.findById(parent);
  food.fillings.push(filling);
  await food.save();

  return filling;
};

const findAllfilling = async () => {
  const fillings = await Filling.find();
  return fillings;
};

const removeFillingById = async (id) => {
  await Filling.findByIdAndDelete(id);
};

module.exports = {
  addFilling,
  findAllfilling,
  removeFillingById,
};