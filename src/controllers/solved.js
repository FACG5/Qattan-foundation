const { getTicketByStatus } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
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
};
