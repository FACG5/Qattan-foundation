const jwt = require('jsonwebtoken');

const unlockCookie = (req, res, next) => {
  if (req.cookies.token) {
    try {
      const decoded = jwt.verify(req.cookies.token, process.env.SECRET);
      res.locals.unlockCookie = decoded;
    } catch (err) {
      res.locals.unlockCookie = null;
    }
  } else {
    res.locals.unlockCookie = null;
  }
  next();
};

module.exports = unlockCookie;
