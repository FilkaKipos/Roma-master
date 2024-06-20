const express = require('express');
const router = express.Router();
const letterController = require('../controllers/letterController');

router.get('/', letterController.renderForm);

router.post('/submit-letter', letterController.submitLetter);

router.get('/letters', letterController.getLetters);

module.exports = router;