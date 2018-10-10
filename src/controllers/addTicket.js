const { addTicket } = require('../model/queries/ticket');

exports.get = (req, res) => {
  res.render('addTicket', {
    title: 'اضافة تذكرة',
    // style: 'employee',
    dom: 'addTicket',
    // headerFound: true,
    // footerFound: true,
    manager: false,
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
