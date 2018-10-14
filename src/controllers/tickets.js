const { getAllTicket } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  if (res.locals.unlockCookie) {
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
  } else {
    res.redirect(401, '/login');
  }
};
