const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');

router.get('/', homeManager.get);

module.exports = router;
