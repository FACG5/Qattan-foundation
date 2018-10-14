const { addTicket } = require('../model/queries/ticket');

exports.get = (req, res) => {
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
};

exports.post = (req, res, next) => {
  const newTicket = req.body;
  addTicket(newTicket)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      next(err);
    });
};
