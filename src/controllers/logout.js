exports.getLogOut = (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
};
