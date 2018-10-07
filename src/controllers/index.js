const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');

router.get('/', homeManager.get);

<<<<<<< Updated upstream
=======
const loans = require('./loans');

const supportDetails = require('./supportDetails');

const loanDetails = require('./loanDetails');

router.route('/')
  .get(homeManager.get);

router.route('/support')
  .get(supports.get);

router.route('/loans')
  .get(loans.get);

router.route('/support/:id')
  .get(supportDetails.get)
  .put(supportDetails.put);
>>>>>>> Stashed changes

router.route('/loan/:id')
  .get(loanDetails.get)
  .put(loanDetails.put);

module.exports = router;
