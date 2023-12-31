const { body, validationResult } = require('express-validator');
const InvariantError = require('../exceptions/InvariantError');

exports.validateFoodVariety = [
  body('name')
    .notEmpty().withMessage('Name cannot be empty')
    .isString()
    .withMessage('Name must be a string'),
  body('price')
    .notEmpty().withMessage('Price cannot be empty')
    .isNumeric()
    .withMessage('Price must be a number'),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new InvariantError(errors.array()[0].msg);
    }

    next();
  },
];