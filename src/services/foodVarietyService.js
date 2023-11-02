const InvariantError = require('../exceptions/InvariantError');
const NotFoundError = require('../exceptions/NotFoundError');
const FoodVariety = require('../models/foodVariety');

const addVariety = async ({ name, price }) => {
  const variety = await new FoodVariety({ name, price }).save();

  return variety;
};

const checkExistingVariety = async (name) => {
  const variety = await FoodVariety.findOne({ name });

  if (variety) {
    throw new InvariantError(`Variety with name '${name}' is existing`);
  }
};

const findAllVariety = async () => {
  const variety = await FoodVariety.find().select('_id name price');

  return variety;
};

const checkAvailabilityVariety = async (id) => {
  const variety = await FoodVariety.findById(id);

  if (!variety) {
    throw new NotFoundError(`Variety with id '${id}' not found`);
  }
};

const findVarietyById = async (id) => {
  await checkAvailabilityVariety(id);

  const variety = await FoodVariety.findById(id);

  return variety;
};

const removeVarietyById = async (id) => {
  checkAvailabilityVariety(id);

  await FoodVariety.findByIdAndDelete(id);
};

const editFoodVarietyById = async (id, { name, price }) => {
  await checkAvailabilityVariety(id);

  const variety = await FoodVariety.findById(id);

  await variety.updateOne({
    name: name || variety.name,
    price: price || variety.price,
  });
};

module.exports = {
  addVariety,
  checkExistingVariety,
  findAllVariety,
  findVarietyById,
  removeVarietyById,
  editFoodVarietyById,
};