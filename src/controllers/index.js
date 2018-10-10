const router = require('express').Router();
const { getUser, postUser } = require('./login.js');
const homeManager = require('./homeManager');
const supports = require('./support');
const loans = require('./loans');
const loanDetails = require('./loanDetails');
const supportDetails = require('./supportDetails');
const solved = require('./solved');
const notSolved = require('./notSolved');
const tickets = require('./tickets');
const { clientError, serverError } = require('./error');
const { getLogOut } = require('./logout');

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

// Login Routes
router.route('/login')
  .get(getUser)
  .post(postUser);

// logout
router.route('/logout')
  .get(getLogOut);

router.use(clientError);
router.use(serverError);


module.exports = router;
