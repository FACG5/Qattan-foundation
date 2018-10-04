const jwt = require('jsonwebtoken');
const {
  getUserData,
} = require('../model/queries/user');


// check the username and password do exist
const checkUserData = (user) => {
  const {
    username,
    password,
  } = user;
  if (username.trim().length !== 0 && password.trim().length !== 0) {
    return true;
  }
  return false;
};

// Create jwt Cookie
const createCookie = (user, res, next) => {
  const {
    username,
    password,
  } = user;
  getUserData(username).then((result) => {
    if (result.rowCount === 1) {
      if (result.rows[0].password === password) {
        const {
          id,
          name,
          department,
        } = result.rows[0];
        const token = jwt.sign({
          id,
          name,
          department,
        }, process.env.SECRET);
        res.cookie('token', token, {
          'Max-Age': (10000),
          httpOnly: true,
        });
        if (department === 'Administration' || department === 'information technology') {
          res.send({ result: '/' });
        } else {
          res.send({ result: '/home-employee' });
        }
      } else {
        res.send({ Error: 'تأكد من كلمة المرور' });
      }
    } else {
      res.send({ Error: 'تأكد من اسم المستخدم' });
    }
  })
    .catch(error => next(error));
};


// Get Route
exports.get = (req, res) => {
  res.render('login', {
    title: 'صفحة تسجيل الدخول',
    headerFound: false,
    footerFound: false,
    style: 'login',
    dom: 'login',
  });
};
// Post Route
exports.post = (req, res, next) => {
  if (checkUserData(req.body)) {
    createCookie(req.body, res, next);
  } else {
    res.send({ Error: 'أدخل الحقول الفارغة' });
  }
};
