const { getLatestTicket, getTicketCount, getNotSolvedCount, getSolvedCount 
} = require('../model/queries/ticket');

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
};
