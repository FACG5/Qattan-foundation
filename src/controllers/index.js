const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');
const supports = require('./support');
const loans = require('./loans');
const loanDetails = require('./loanDetails');

router.route('/')
  .get(homeManager.get);

router.route('/support')
  .get(supports.get);

router.route('/loans')
  .get(loans.get);

router.route('/loan/:id')
  .get(loanDetails.get)
  .put(loanDetails.put);

module.exports = router;
