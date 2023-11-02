const asyncHandler = require('express-async-handler');
const { createUser, userSign } = require('../services/authService');
const { createAccessToken } = require('../tokenize/tokenManager');

const userRegisterHandler = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  const user = await createUser({ email, username, password });

  res.status(201).json({
    status: 'success',
    message: 'New user created successfully',
    data: {
      user,
    },
  });
});

const userLoginHandler = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const { _id, username, role } = await userSign({ email, password });
  const accessToken = await createAccessToken({ id: _id, username, role });

  res.status(200).json({
    status: 'success',
    data: {
      accessToken,
    },
  });
});

module.exports = {
  userRegisterHandler,
  userLoginHandler,
};