const { getTicketDetails, updateTicket } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  if (res.locals.unlockCookie) {
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
  } else {
    res.redirect(401, '/login');
  }
};

exports.put = (req, res, next) => {
  const data = req.body;
  updateTicket(data)
    .then((response) => {
      if (response.rowCount === 1) {
        res.send({ result: 'اتخاذ اجراء للطلب ' });
      } else {
        res.send({ error: 'خطأ في المحاولة ' });
      }
    })
    .catch((err) => {
      next(err);
    });
};
