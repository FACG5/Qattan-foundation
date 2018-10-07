const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');

const supports = require('./support');

router.route('/')
  .get(homeManager.get);

router.route('/support')
  .get(supports.get);

module.exports = router;
