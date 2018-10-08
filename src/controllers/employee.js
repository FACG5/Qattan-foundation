const { getTicketByName } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  const name = 'salwa';
  getTicketByName(name)
    .then((response) => {
      const result = (response.rows);
      console.log(result[0].status_type);
      result.forEach((x)=> {
        if(x.status_type == "not solved") {
          console.log(x.status_type)}
      })
      res.render('employee', {
        title: 'الرئيسية',
        style: 'empHome',
        dom: 'empHome',
        manager: false,
        // resultSolved ,
        // resultWaiting ,
      });
    })
    .catch(err => next(err));
};
