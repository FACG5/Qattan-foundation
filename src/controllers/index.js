const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');

const support = require('./support');

const loans = require('./loans');

router.get('/', homeManager.get);
router.get('/support', support.get);
router.get('/loans', loans.get);

module.exports = router;
