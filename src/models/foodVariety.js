const mongoose = require('mongoose');

const foodVarietySchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required',
  },
  price: {
    type: Number,
    required: 'Price is required',
  },
}, { timestamps: true });

module.exports = mongoose.model('FoodVariety', foodVarietySchema);