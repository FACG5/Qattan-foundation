const router = require('express').Router();
const { getUser, postUser } = require('./login.js');
const homeManager = require('./homeManager');
const supports = require('./support');
const loans = require('./loans');
const loanDetails = require('./loanDetails');
const supportDetails = require('./supportDetails');
const reports = require('./reports');
const employee = require('./employee');
const solved = require('./solved');
const notSolved = require('./notSolved');
const tickets = require('./tickets');
const { clientError, serverError } = require('./error');
const { getLogOut } = require('./logout');
const addTicket = require('./addTicket');

router.route('/')
  .get(homeManager.get);

router.route('/tickets')
  .get(tickets.get);

router.route('/solved')
  .get(solved.get);

router.route('/not-solved')
  .get(notSolved.get);

router.route('/support')
  .get(supports.get);

router.route('/loans')
  .get(loans.get);

router.route('/report')
  .get(reports.get)
  .post(reports.post);

router.route('/loan/:id')
  .get(loanDetails.get)
  .put(loanDetails.put);

router.route('/support/:id')
  .get(supportDetails.get)
  .put(supportDetails.put);

router.route('/home-employee')
  .get(employee.get);
// Login Routes
router.route('/login')
  .get(getUser)
  .post(postUser);

// logout
router.route('/logout')
  .get(getLogOut);

router.route('/add-ticket')
  .get(addTicket.get)
  .post(addTicket.post);

router.use(clientError);
router.use(serverError);


module.exports = router;
