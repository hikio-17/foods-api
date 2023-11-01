const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required',
  },
  basePrice: {
    type: Number,
    required: 'Base Price is required',
  },
  fillings: [
    {
      type: ObjectId,
      ref: 'FoodVariety',
    },
  ],
  toppings: [
    {
      type: ObjectId,
      ref: 'FoodVariety',
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Food', foodSchema);
