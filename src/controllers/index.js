const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');
const supports = require('./support');
const loans = require('./loans');
const loanDetails = require('./loanDetails');
const supportDetails = require('./supportDetails');

const employee = require('./employee');

const addTicket = require('./addTicket');

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

router.route('/employeeHome')
  .get(employee.get);

router.route('/addTicket')
  .get(addTicket.get);
  // .post(addTicket.post);


module.exports = router;
