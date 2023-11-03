const asyncHandler = require('express-async-handler');
const AuthenticationError = require('../exceptions/AuthenticationError');
const AuthorizationError = require('../exceptions/AuthorizationError');
const { verifyAccessToken, decodePayload } = require('../tokenize/tokenManager');

exports.authCheck = asyncHandler(async (req, res, next) => {
  if (!req.headers.authorization) {
    throw new AuthenticationError('Access token required. please login first');
  }

  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    throw new AuthenticationError('Access token required. please login first');
  }

  await verifyAccessToken(token);

  const decode = await decodePayload(token);

  if (!decode) {
    throw new AuthenticationError('The token you provided is invalid.');
  }

  req.user = {
    ...decode,
  };

  next();
});

exports.adminCheck = asyncHandler(async (req, res, next) => {
  if (req.user.role !== 'ADMIN') {
    throw new AuthorizationError('You are not entitled to access this resource');
  }

  next();
});