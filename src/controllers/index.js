const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');

const supports = require('./support');

const loans = require('./loans');

const employee = require('./employee');

const addTicket = require('./addTicket');

router.route('/')
  .get(homeManager.get);

router.route('/support')
  .get(supports.get);

router.route('/loans')
  .get(loans.get);

router.route('/employeeHome')
  .get(employee.get);

// router.route('/addTicket')
// .get(addTicket.get);

module.exports = router;
