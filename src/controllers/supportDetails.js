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
    .then(() => res.send(data))
    .catch((err) => {
      next(err);
    });
};
