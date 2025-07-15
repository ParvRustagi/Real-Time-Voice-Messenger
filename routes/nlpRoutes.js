const express = require('express');
const router = express.Router();
const { analyzeText } = require('../controllers/nlpController1');

router.post('/analyze', analyzeText);

module.exports = router;