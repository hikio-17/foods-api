const asyncHandler = require('express-async-handler');
const { addFilling, findAllfilling, removeFillingById } = require('../services/fillingService');

const addFillingHandler = asyncHandler(async (req, res) => {
  const { name, price, parent } = req.body;

  const filling = await addFilling({ name, price, parent });

  res.status(200).json({
    status: 'success',
    message: 'Created new filling successfully',
    data: {
      filling,
    },
  });
});

const getAllFillingHandler = asyncHandler(async (req, res) => {
  const fillings = await findAllfilling();

  res.status(200).json({
    status: 'success',
    message: 'Retrieve all fillings',
    data: {
      fillings,
    },
  });
});

const deleteFillingByIdHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await removeFillingById(id);

  res.status(200).json({
    status: 'success',
    message: `Delete filling with id '${id}' successfully`,
  });
});

module.exports = {
  addFillingHandler,
  getAllFillingHandler,
  deleteFillingByIdHandler,
};