const mongoose = require('mongoose');

require('dotenv').config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connection to database success ...');
  } catch (error) {
    console.log('Connection to database failed ');
    console.log(error);
  }
};
module.exports = connectDb;
