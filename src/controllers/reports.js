const {
  getAllTicket, getTicketByPeriod, getLoans, getSupports, getNotSolved, getTicketByStatus,
} = require('../model/queries/ticket');

exports.get = async (req, res, next) => {
  try {
    const solved = 'solved';
    const progress = 'in';
    const ticket = await getAllTicket();
    const ticketLoans = await getLoans();
    const ticketSupports = await getSupports();
    const ticketSolve = await getTicketByStatus(solved);
    const ticketNotSolved = await getNotSolved();
    const ticketInProgress = await getTicketByStatus(progress);
    res.render('reports', {
      style: 'master',
      style_special: 'report',
      title: 'تقارير',
      dom: 'report',
      manager: true,
      result: ticket.rows,
      loans: ticketLoans.rows,
      supports: ticketSupports.rows,
      solve: ticketSolve.rows,
      notSolved: ticketNotSolved.rows,
      inProgress: ticketInProgress.rows,
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
        if (response.rowCount === 0) {
          res.send({ Error: 'لا يوجد نتيجة مطابقة مع التاريخ' });
        } else {
          res.json(response.rows);
        }
      })
      .catch((err) => {
        next(err);
      });
  } else {
    res.send({ Error: 'أدخل الحقول الفارغة' });
  }
};
