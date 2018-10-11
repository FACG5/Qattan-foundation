const {
  getLatestTicket, getTicketCount, getNotSolvedCount, getSolvedCount,
} = require('../model/queries/ticket');

exports.get = async (req, res, next) => {
  try {
    if (res.locals.unlockCookie) {
      if (res.locals.unlockCookie.department === 'Administration') {
        const latestTicket = await getLatestTicket();
        const ticketCount = await getTicketCount();
        const solvedCount = await getSolvedCount();
        const notSolvedCount = await getNotSolvedCount();
        res.render('homeManager', {
          style: 'master',
          style_special: 'homeManager',
          title: 'Manager',
          dom: 'homeManager',
          manager: true,
          result: latestTicket.rows,
          tCount: ticketCount.rows,
          tSolved: solvedCount.rows,
          tNotSolved: notSolvedCount.rows,
          nameU: res.locals.unlockCookie.name,
        });
      } else {
        res.redirect(403, '/login');
      }
    } else {
      res.redirect(401, '/login');
    }
  } catch (err) {
    next(err);
  }
};
