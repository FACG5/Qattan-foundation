
const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');
const supports = require('./support');
const loans = require('./loans');
const loanDetails = require('./loanDetails');
const supportDetails = require('./supportDetails');
const {
  viewInventory, postInventory, updateInventoryPage, updateInventoryFun,
} = require('./inventory');

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

// view and add inventory route
router.route('/inventory')
  .get(viewInventory)
  .post(postInventory);

// clicking on edit button will move to new page and route
router.route('/updateInventoryPage/:id')
  .get(updateInventoryPage)
  .put(updateInventoryFun);


module.exports = router;
