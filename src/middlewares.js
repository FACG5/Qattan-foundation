const { verify } = require('jsonwebtoken');

exports.Auth = (req, res, next) => {
  if (req.cookies.token) {
    try {
      const decoded = verify(req.cookies.token, process.env.SECRET);
      res.locals.unlockCookie = decoded;
    } catch (err) {
      res.locals.unlockCookie = null;
    }
  } else {
    res.locals.unlockCookie = null;
  }
  next();
};
