const {
  getLatestTicket, getTicketCount, getNotSolvedCount, getSolvedCount,
} = require('../model/queries/ticket');

/* gets the latest ticket submitted and displays the count of all tickets,
count of solved tickets, and count of unsolved tickets.
*/
// using async await to avoid promise chaining aka promise hell.
exports.get = async (req, res, next) => {
  // the try block means that we can handle any error that happens inside it by adding
  // a catch block. try { some function } catch (error) { do stuff with error if it happens. }
  try {
    // we define the result that returns from each promise in a variable.
    // for example, latestTicket will have the same value as what is returned
    // inside the .then() method of the getLatestTicket() promise.
    // for example, when we write getLatestTicket().then(result),
    // the "result" stored inside the .then is the same as the const
    // latestTicket in the line below.
    const latestTicket = await getLatestTicket();
    const ticketCount = await getTicketCount();
    const solvedCount = await getSolvedCount();
    const notSolvedCount = await getNotSolvedCount();
    res.render('homeManager', {
      style: 'master',
      title: 'Manager',
      dom: 'homeManager',
      manager: true,
      result: latestTicket.rows, // we can access anything inside the result object like this.
      tCount: ticketCount.rows,
      tSolved: solvedCount.rows,
      tNotSolved: notSolvedCount.rows,
    });
  } catch (err) {
    next(err);
  }
  // getLatestTicket()
  //   .then((response) => {
  //     const result = (response.rows);
  //     getTicketCount()
  //       .then((countTicket) => {
  //         const tCount = (countTicket.rows);
  //         getSolvedCount()
  //           .then((countSolved) => {
  //             const tSolved = (countSolved.rows);
  //             getNotSolvedCount()
  //               .then((countNotSolved) => {
  //                 const tNotSolved = (countNotSolved.rows);
  //                 res.render('homeManager', {
  //                   style: 'master',
  //                   title: 'Manager',
  //                   dom: 'homeManager',
  //                   manager: true,
  //                   result,
  //                   tCount,
  //                   tSolved,
  //                   tNotSolved,
  //                 });
  //               })
  //               .catch(error => next(error));
  //           })
  //           .catch(error => next(error));
  //       })
  //       .catch(error => next(error));
  //   })
  //   .catch(error => next(error));
};
