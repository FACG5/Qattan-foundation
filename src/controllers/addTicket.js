const { addTicket } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  res.render('addTicket', {
    title: 'اضافة تذكرة',
    style: 'empHome',
    dom: 'empHome',
    manager: false,
  });
};

exports.post = (req, res, next) => {
  const newTicket  = req.body;
  addTicket(newTicket)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      next(err);
    });
};
