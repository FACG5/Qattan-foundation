const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');

const supports = require('./support');

const loans = require('./loans');

router.route('/')
  .get(homeManager.get);

router.route('/support')
  .get(supports.get);

router.route('/loans')
  .get(loans.get);

module.exports = router;
