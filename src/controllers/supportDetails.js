const { getTicketDetails, updateTicket } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  const data = req.params;
  const { id } = data;
  getTicketDetails(id)
    .then((response) => {
      const result = response.rows;
      res.render('supportDetails', {
        title: 'تفاصيل البطاقة',
        style: 'master',
        style_special: 'details',
        dom: 'updateTicket',
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
