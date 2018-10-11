const { getAllTicket } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  getAllTicket()
    .then((response) => {
      const result = response.rows;
      res.render('tickets', {
        title: 'طلبات ',
        style: 'master',
        result,
        manager: true,
      });
    })
    .catch(error => next(error));
};
