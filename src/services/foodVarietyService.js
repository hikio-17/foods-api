const InvariantError = require('../exceptions/InvariantError');
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

module.exports = {
  addVariety,
  checkExistingVariety,
};