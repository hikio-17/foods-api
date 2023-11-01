const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const fillingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required',
  },
  price: {
    type: Number,
    required: 'Price is required',
  },
  parent: [
    {
      type: ObjectId,
      required: true,
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Filling', fillingSchema);
