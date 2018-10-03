const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getUserData } = require('../model/queries/user');

// check the username and password do exist
const checkUserData = (user) => {
  const { username, password } = user;
  if (username.trim().length !== 0 && password.trim().length !== 0)
  { return true; }
  return false;
};

// Create jwt Cookie
const createCookie = (user) => {
const { username, password } = user;

};




// Get Route
exports.get = (req, res) => {
  res.render('login', {
    title: 'صفحة تسجيل الدخول', headerFound: false, footerFound: false, style: ['login'], javascript: ['login'],
  });
};
// Post Route
exports.post = (req, res) => {
// examin the user exist , return to the login
//create cookie , check department, redirect him to the corresponding page

};
