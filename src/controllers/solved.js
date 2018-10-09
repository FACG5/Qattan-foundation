const { getTicketByStatus } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  const data = req.params;
  const { solved } = data;
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
