const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');

const supports = require('./support');

router.get('/', homeManager.get);

router.get('/support', supports.get);

module.exports = router;
