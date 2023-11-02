const Order = require('../models/order');
const Food = require('../models/food');
const FoodVariety = require('../models/foodVariety');
const AuthorizationError = require('../exceptions/AuthorizationError');

const addOrder = async ({
  user, items,
}) => {
  const itemsProduct = await Promise.all(items.map(async (item) => {
    const product = await Food.findOne({ _id: item.food }).select('_id name basePrice');
    const filling = await FoodVariety.findOne({ _id: item.filling }).select('name price');
    const topping = await FoodVariety.findOne({ _id: item.topping }).select('name price');

    return {
      food: product,
      filling,
      topping,
    };
  }));

  const totalPrice = itemsProduct.reduce((acc, curr) => {
    let itemPrice = curr.food.basePrice;

    if (curr.filling && curr.topping) {
      itemPrice += curr.filling.price + curr.topping.price;
    } else if (curr.filling) {
      itemPrice += curr.filling.price;
    } else if (curr.topping) {
      itemPrice += curr.topping.price;
    }

    return acc + itemPrice;
  }, 0);

  const newOrder = await new Order({
    user,
    items: itemsProduct,
    totalPrice,
  }).save();

  return newOrder;
};

const findAllOrder = async ({ role, id }) => {
  const orders = await Order.find()
    .populate({
      path: 'user',
      model: 'User',
      select: '_id username',
    })
    .populate({
      path: 'items',
      populate: [
        { path: 'food', model: 'Food', select: '_id name basePrice' },
        { path: 'topping', model: 'FoodVariety', select: 'name price' },
        { path: 'filling', model: 'FoodVariety', select: 'name price' },
      ],
    })
    .exec();

  if (role !== 'ADMIN') {
    return orders.filter((order) => order.user._id.toString() === id);
  }

  return orders;
};

const removeOrderById = async (id, { id: user, role }) => {
  if (role !== 'ADMIN') {
    throw new AuthorizationError('You are not entitled to access this resource');
  }

  await Order.findByIdAndDelete(id);
};

module.exports = {
  addOrder,
  findAllOrder,
  removeOrderById,
};