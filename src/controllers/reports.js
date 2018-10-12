const {
  getAllTicket, getTicketByPeriod, getLoans, getSupports, getNotSolved, getTicketByStatus,
} = require('../model/queries/ticket');

exports.get = async (req, res, next) => {
  try {
    const solved = 'solved';
    const progress = 'in';
    const ticket = await getAllTicket();
    const tLoans = await getLoans();
    const tSupports = await getSupports();
    const tSolve = await getTicketByStatus(solved);
    const tNotSolved = await getNotSolved();
    const tInProgress = await getTicketByStatus(progress);
    res.render('reports', {
      style: 'master',
      style_special: 'report',
      title: 'تقارير',
      dom: 'report',
      manager: true,
      result: ticket.rows,
      loans: tLoans.rows,
      supports: tSupports.rows,
      solve: tSolve.rows,
      notSolved: tNotSolved.rows,
      inProgress: tInProgress.rows,
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
