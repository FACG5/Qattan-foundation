const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');

<<<<<<< Updated upstream
router.get('/', homeManager.get);
=======

const solved = require('./solved');
const notSolved = require('./notSolved');
const tickets = require('./tickets');

router.route('/')
  .get(homeManager.get);
>>>>>>> Stashed changes


router.route('/tickets')
  .get(tickets.get);

router.route('/solved/:solved')
  .get(solved.get);

router.route('/closed/:not')
  .get(notSolved.get);

module.exports = router;
