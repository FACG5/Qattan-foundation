const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');

const supportDetails = require('./supportDetails');

router.route('/')
  .get(homeManager.get);

router.route('/support/:id')
  .get(supportDetails.get)
  .put(supportDetails.put);


module.exports = router;
