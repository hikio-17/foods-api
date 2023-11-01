/* eslint-disable no-unused-vars */
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

module.exports = {
  addFood,
  findAllFood,
  findFoodById,
  editFoodById,
  removeFoodById,
};
