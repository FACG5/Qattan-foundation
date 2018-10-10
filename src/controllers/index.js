const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');
const supports = require('./support');
const loans = require('./loans');
const loanDetails = require('./loanDetails');
const supportDetails = require('./supportDetails');
const solved = require('./solved');
const notSolved = require('./notSolved');
const tickets = require('./tickets');
const { clientError, serverError } = require('./error');

router.get('/', homeManager.get);

router.route('/')
  .get(homeManager.get);

router.route('/tickets')
  .get(tickets.get);

router.route('/solved/:solved')
  .get(solved.get);

router.route('/closed/:not')
  .get(notSolved.get);
router.route('/')
  .get(homeManager.get);

router.route('/support')
  .get(supports.get);

router.route('/loans')
  .get(loans.get);

router.route('/loan/:id')
  .get(loanDetails.get)
  .put(loanDetails.put);

router.route('/support/:id')
  .get(supportDetails.get)
  .put(supportDetails.put);

router.use(clientError);
router.use(serverError);
module.exports = router;
