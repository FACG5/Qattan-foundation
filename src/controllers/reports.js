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
  const { minPeriod, maxPeriod } = data;
  if (minPeriod !== '' && maxPeriod !== '') {
    getTicketByPeriod(data)
      .then((response) => {
        res.json(response.rows);
      })
      .catch((err) => {
        next(err);
      });
  } else {
    res.status(400).json({ msg: 'Plaese Enter The Period' });
  }
};
