const { addTicket } = require('../model/queries/ticket');

exports.get = (req, res) => {
  if (res.locals.unlockCookie) {
    const department = res.locals.unlockCookie.department;
    const employee = res.locals.unlockCookie.name;
    res.render('addTicket', {
      title: 'اضافة تذكرة',
      style: 'employee',
      style_special: 'form',
      dom: 'addTicket',
      headerFound: true,
      footerFound: true,
      manager: false,
      department,
      employee,
    });
  } else {
    res.redirect(401, '/login');
  }
};

exports.post = (req, res, next) => {
  const newTicket = req.body;
  addTicket(newTicket)
    .then((response) => {
      if (response.rowCount === 0) {
        res.send({ Error: 'أدخل الحقول الفارغة' });
      } else {
        res.send({ Result: ' تمت اﻹضافة بنجاح ' });
      }
    })
    .catch((err) => {
      next(err);
    });
};
