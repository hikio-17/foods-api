const express = require('express');
const { userRegisterHandler, userLoginHandler } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', userRegisterHandler);
router.post('/signin', userLoginHandler);

module.exports = router;