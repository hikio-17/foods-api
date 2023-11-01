const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const toppingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required',
  },
  price: {
    type: Number,
    required: 'Price is requried',
  },
  parent:
    {
      type: ObjectId,
      ref: 'Food',
      required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Topping', toppingSchema);
