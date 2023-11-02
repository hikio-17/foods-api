const NotFoundError = require('../exceptions/NotFoundError');
const InvariantError = require('../exceptions/InvariantError');
const Food = require('../models/food');
const FoodVariety = require('../models/foodVariety');

const checkExistingFoodByName = async (name) => {
  const regexName = new RegExp(`^${name}$`, 'i');

  const food = await Food.findOne({ name: { $regex: regexName } });

  if (food) {
    throw new InvariantError(`Food with name '${name}' is existing`);
  }
};

const addFood = async ({
  name, basePrice, fillings, toppings,
}) => {
  await checkExistingFoodByName(name);
  const fillingsItem = await Promise.all(fillings.map(async (item) => {
    const filling = await FoodVariety.findOne({ _id: item }).select('_id name price');
    return filling;
  }));

  const toppingsItem = await Promise.all(toppings.map(async (item) => {
    const topping = await FoodVariety.findOne({ _id: item }).select('_id name price');
    return topping;
  }));

  const newFood = await new Food({
    name, basePrice, fillings: fillingsItem, toppings: toppingsItem,
  }).save();

  return newFood;
};

const findAllFood = async () => {
  const foods = await Food.find()
    .select('_id name basePrice createdAt updatedAt')
    .exec();
  return foods;
};

const checkAvailabilityFood = async (id) => {
  const food = await Food.findById({ _id: id }).exec();

  if (!food) {
    throw new NotFoundError(`Food with id '${id}' not found.`);
  }
};

const findFoodById = async (id) => {
  await checkAvailabilityFood(id);
  const food = await Food.findById({ _id: id })
    .populate({
      path: 'toppings',
      model: 'FoodVariety',
      select: '_id name price',
    })
    .populate({
      path: 'fillings',
      model: 'FoodVariety',
      select: '_id name price',
    })
    .exec();
  return food;
};

const removeFoodById = async (id) => {
  await checkAvailabilityFood(id);
  await Food.findByIdAndDelete(id);
};

const editFoodById = async (id, { name, basePrice }) => {
  await checkAvailabilityFood(id);
  //
};

module.exports = {
  addFood,
  findAllFood,
  findFoodById,
  editFoodById,
  removeFoodById,
  checkAvailabilityFood,
};
