const express = require('express');
const { addFillingHandler, getAllFillingHandler, deleteFillingByIdHandler } = require('../controllers/fillingController');

const router = express.Router();

router.get('/fillings', getAllFillingHandler);
router.post('/fillings', addFillingHandler);
router.delete('/fillings/:id', deleteFillingByIdHandler);

module.exports = router;