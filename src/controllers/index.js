const Router = require('express').Router();
const { get } = require('./login.js');

// Login Routes
Router.route('/login')
  .get(get);
// .post(post);

module.exports = Router;
