/* eslint-disable no-unused-vars */
const NotFoundError = require('../exceptions/NotFoundError');
const Food = require('../models/food');

const addFood = async ({ name, basePrice }) => {
  const newFood = await new Food({ name, basePrice }).save();
  return newFood;
};

const findAllFood = async () => {
  const foods = await Food.find({}).exec();
  return foods;
};

const findFoodById = async ({ id }) => {
  const food = await Food.find({ _id: id }).exec();
  return food;
};

const removeFoodById = async ({ id }) => {
  await Food.findByIdAndDelete({ _id: id });
};

const editFoodById = async (id, { name, basePrice }) => {
  //
};

const checkFood = async (id) => {
  const food = await Food.findById({ _id: id }).exec();

  if (!food) {
    throw new NotFoundError(`Food with id '${id}' not found.`);
  }
};

module.exports = {
  addFood,
  findAllFood,
  findFoodById,
  editFoodById,
  removeFoodById,
  checkFood,
};
