const { getTicketByStatus } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  if (res.locals.unlockCookie) {
    const solved = 'solved';
    getTicketByStatus(solved)
      .then((response) => {
        const result = response.rows;
        res.render('solved', {
          title: 'طلبات',
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
