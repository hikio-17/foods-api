const asyncHandler = require('express-async-handler');
const {
  addVariety,
  checkExistingVariety,
  findAllVariety,
  findVarietyById,
  removeVarietyById,
  editFoodVarietyById,
} = require('../services/foodVarietyService');

const addFoodVarietyHandler = asyncHandler(async (req, res) => {
  const { name, price } = req.body;
  await checkExistingVariety(name);
  const variety = await addVariety({ name, price });

  res.status(201).json({
    status: 'success',
    message: 'New variety is created',
    data: {
      variety,
    },
  });
});

const getAllFoodVariety = asyncHandler(async (req, res) => {
  const varieties = await findAllVariety();

  res.status(200).json({
    status: 'success',
    message: 'Retrieve all food variety',
    data: {
      varieties,
    },
  });
});

const getVarietyByIdHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const variety = await findVarietyById(id);

  res.status(200).json({
    status: 'success',
    data: {
      variety,
    },
  });
});

const updateVarietyByIdHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await editFoodVarietyById(id, req.body);

  res.status(200).json({
    status: 'success',
    message: `Variety with id '${id}' successfully updated`,
  });
});

const deleteVarietyByIdHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await removeVarietyById(id);

  res.status(200).json({
    status: 'success',
    mesage: `Variety with id '${id}' successfully deleted`,
  });
});

module.exports = {
  addFoodVarietyHandler,
  getAllFoodVariety,
  getVarietyByIdHandler,
  updateVarietyByIdHandler,
  deleteVarietyByIdHandler,
};