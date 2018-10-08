const {
  getAllTicket, getTicketByPeriod,
} = require('../model/queries/ticket');

exports.get = async (req, res, next) => {
  try {
    const ticket = await getAllTicket();
    res.render('reports', {
      style: 'master',
      title: 'تقارير',
      dom: 'report',
      manager: true,
      result: ticket.rows,
    });
  } catch (err) {
    next(err);
  }
};

exports.post = (req, res, next) => {
  const data = req.body;
  getTicketByPeriod(data)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      next(err);
    });
};
