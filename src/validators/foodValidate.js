const { body, validationResult } = require('express-validator');
const InvariantError = require('../exceptions/InvariantError');

exports.validateFood = [
  body('name')
    .notEmpty().withMessage('Name cannot be empty')
    .isString()
    .withMessage('Name must be a string'),
  body('basePrice')
    .notEmpty().withMessage('Baseprice cannot be empty')
    .isNumeric()
    .withMessage('Name must be a number'),
  body('toppings')
    .isArray()
    .withMessage('Toppings must be a array'),
  body('fillings')
    .isArray().withMessage('Fillings must be a array'),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new InvariantError(errors.array()[0].msg);
    }

    next();
  },
];