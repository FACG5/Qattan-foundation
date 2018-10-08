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
        console.log(111111111111111111,x);
       
        if (x.status_type === 'solved') {
          resultSolved.push(x);
        } else {
          resultWaiting.push(x);
        }
      });
  //   console.log(resultSolved[0]);
  // console.log(resultWaiting[0]);

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