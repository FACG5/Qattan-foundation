const { getTicketDetails, updateTicket } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  const data = req.params;
  const { id } = data;
  getTicketDetails(id)
    .then((response) => {
      const result = response.rows;
      res.render('loanDetails', {
        title: 'تفاصيل البطاقة',
        style: 'master',
        style_special: 'details',
        dom: 'updateLoan',
        result,
        manager: true,
      });
    })
    .catch(error => next(error));
};

exports.put = (req, res, next) => {
  const data = req.body;
  updateTicket(data)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      next(err);
    });
};
