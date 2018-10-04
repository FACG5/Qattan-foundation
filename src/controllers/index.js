const Router = require('express').Router();
const { get, post } = require('./login.js');

// Login Routes
Router.route('/login')
  .get(get)
  .post(post);

module.exports = Router;
