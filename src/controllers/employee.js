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
      result.forEach((element) => {
        if (element.status_type === 'solved') {
          resultSolved.push(element);
        } else {
          resultWaiting.push(element);
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
