const router = require('express').Router();
const { getUser, postUser } = require('./login.js');
const homeManager = require('./homeManager');

// Login Routes
router.route('/login')
  .get(getUser)
  .post(postUser);

router.get('/', homeManager.get);

module.exports = router;
