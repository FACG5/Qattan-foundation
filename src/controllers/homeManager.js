const {
  getLatestTicket, getTicketCount, getNotSolvedCount, getSolvedCount,
} = require('../model/queries/ticket');

<<<<<<< Updated upstream
exports.get = (req, res, next) => {
  getLatestTicket()
    .then((response) => {
      const result = (response.rows);
      getTicketCount()
        .then((countTicket) => {
          const tCount = (countTicket.rows);
          getSolvedCount()
            .then((countSolved) => {
              const tSolved = (countSolved.rows);
              getNotSolvedCount()
                .then((countNotSolved) => {
                  const tNotSolved = (countNotSolved.rows);
                  res.render('homeManager', {
                    style: 'master',
                    title: 'Manager',
                    dom: 'homeManager',
                    manager: true,
                    result,
                    tCount,
                    tSolved,
                    tNotSolved,
                  });
                })
                .catch(error => next(error));
            })
            .catch(error => next(error));
        })
        .catch(error => next(error));
    })
    .catch(error => next(error));
=======
exports.get = async (req, res, next) => {
  try {
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
    });
  } catch (err) {
    next(err);
  }
>>>>>>> Stashed changes
};
