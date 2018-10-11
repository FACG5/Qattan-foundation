const {
  getTicketByName,
} = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  const name = 'salwa';
  getTicketByName(name)
    .then((response) => {
      const result = (response.rows);
      const resultSolved = [];
      const resultWaiting = [];
      result.forEach((ticket) => {
        if (ticket.status_type === 'solved') {
          resultSolved.push(ticket);
        } else {
          resultWaiting.push(ticket);
        }
      });

      res.render('employee', {
        title: 'الرئيسية',
        style: 'employee',
        dom: 'employee',
        headerFound: true,
        footerFound: true,
        manager: false,
        resultSolved,
        resultWaiting,
      });
    })
    .catch(err => next(err));
};
