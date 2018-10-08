const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');

const supports = require('./support');

const loans = require('./loans');

const supportDetails = require('./supportDetails');

router.route('/')
  .get(homeManager.get);

router.route('/support')
  .get(supports.get);

router.route('/loans')
  .get(loans.get);

router.route('/support/:id')
  .get(supportDetails.get)
  .put(supportDetails.put);

module.exports = router;
