const express = require('express');
const { userRegisterHandler, userLoginHandler } = require('../controllers/authController');
const { validateUserRegister } = require('../validators/userRegisterValidate');

const router = express.Router();

router.post('/signup', validateUserRegister, userRegisterHandler);
router.post('/signin', userLoginHandler);

module.exports = router;