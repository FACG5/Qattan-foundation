const { addTicket } = require('../model/queries/ticket');


exports.get = (req, res, next) => {
  res.render('addTicket', {
    title: 'اضافة تذكرة',
    style: 'addTicket',
    dom: 'empHome',
    manager: false,
  });
};

exports.post = (req, res, next) => {
  const data = req.body;
  addTicket(data)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      next(err);
    });
};
