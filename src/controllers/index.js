const router = require('express').Router();
const { get, post } = require('./login.js');
const homeManager = require('./homeManager');

// Login Routes
router.route('/login')
  .get(get)
  .post(post);
  
router.get('/', homeManager.get);

module.exports = router;
