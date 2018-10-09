const {
  getTicketByName
} = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  const name = 'salwa';
  getTicketByName(name)
    .then((response) => {
      const result = (response.rows);
      let resultSolved = [];
      let resultWaiting = [];
      result.forEach((x) => {       
        if (x.status_type === 'solved') {
          resultSolved.push(x);
        } else {
          resultWaiting.push(x);
        }
      });

      res.render('employee', {
        title: 'الرئيسية',
        style: 'empHome',
        dom: 'empHome',
        manager: false,
        resultSolved,
        resultWaiting,
      });
    })
    .catch(err => next(err));
};