const { getTicketByName } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  const name = 'salwa';
  getTicketByName(name)
    .then((response) => {
      const result = (response.rows);

      res.render('employee', {
        title: 'الرئيسية',
        style: 'empHome',
        dom: 'empHome',
        manager: false,
        result,
      });
    })
    .catch(err => next(err));
};
