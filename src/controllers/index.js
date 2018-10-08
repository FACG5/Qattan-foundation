const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');

const supports = require('./support');

const loans = require('./loans');

const reports = require('./reports');
const reportDate = require('./reports');

router.route('/')
  .get(homeManager.get);

router.route('/support')
  .get(supports.get);

router.route('/loans')
  .get(loans.get);
router.route('/reports')
  .get(reports.get)
  .post(reports.post);

router.route('/reports/date')
  .get(reportDate.get);

module.exports = router;
