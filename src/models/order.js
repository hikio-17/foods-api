const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User',
  },
  items: [
    {
      food: {
        type: ObjectId,
        ref: 'Food',
      },
      topping: {
        type: ObjectId,
        ref: 'FoodVariety',
      },
      filling: {
        type: ObjectId,
        ref: 'FoodVariety',
      },
    },
  ],
  totalPrice: Number,
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);