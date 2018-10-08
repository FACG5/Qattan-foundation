
const express = require('express');

const router = express.Router();

const homeManager = require('./homeManager');

const { viewInventory, postInventory } = require('./inventory');

router.get('/', homeManager.get);

// view and add inventory route
router.route('/inventory')
  .get(viewInventory)
  .post(postInventory);

// clicking on edit button will move to new page and route
// router.route('/updateInventoryPage/:id')
//   .get(viewInventory)

module.exports = router;
