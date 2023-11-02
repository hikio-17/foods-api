const { body, validationResult } = require('express-validator');
const InvariantError = require('../exceptions/InvariantError');

exports.validateUserRegister = [
  body('username')
    .notEmpty().withMessage('Username cannot be empty')
    .isString()
    .withMessage('Username must be a string'),
  body('email')
    .notEmpty().withMessage('email cannot be empty')
    .isEmail()
    .withMessage('Email entered must be valid'),
  body('password')
    .notEmpty().withMessage('password cannot be empty')
    .isString()
    .withMessage('password must be a string'),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new InvariantError(errors.array()[0].msg);
    }

    next();
  },
];