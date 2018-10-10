const {
  getLatestTicket, getTicketCount, getNotSolvedCount, getSolvedCount,
} = require('../model/queries/ticket');

exports.get = async (req, res, next) => {
  try {
    console.log(res.locals.unlockCookie,"ssssss");
    const latestTicket = await getLatestTicket();
    const ticketCount = await getTicketCount();
    const solvedCount = await getSolvedCount();
    const notSolvedCount = await getNotSolvedCount();
    res.render('homeManager', {
      style: 'master',
      title: 'Manager',
      dom: 'homeManager',
      manager: true,
      result: latestTicket.rows,
      tCount: ticketCount.rows,
      tSolved: solvedCount.rows,
      tNotSolved: notSolvedCount.rows,
    });
  } catch (err) {
    next(err);
  }
};
