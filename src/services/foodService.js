const NotFoundError = require('../exceptions/NotFoundError');
const Food = require('../models/food');
const FoodVariety = require('../models/foodVariety');

const addFood = async ({
  name, basePrice, fillings, toppings,
}) => {
  const fillingsItem = await Promise.all(fillings.map(async (item) => {
    const filling = await FoodVariety.findOne({ _id: item });
    return filling;
  }));

  const toppingsItem = await Promise.all(toppings.map(async (item) => {
    const topping = await FoodVariety.findOne({ _id: item });
    return topping;
  }));

  const newFood = await new Food({
    name, basePrice, fillings: fillingsItem, toppings: toppingsItem,
  }).save();

  return newFood;
};

const findAllFood = async () => {
  const foods = await Food.find({}).exec();
  return foods;
};

const findFoodById = async (id) => {
  const food = await Food.findById({ _id: id }).populate('toppings').populate('fillings').exec();
  return food;
};

const removeFoodById = async (id) => {
  await Food.findByIdAndDelete(id);
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
