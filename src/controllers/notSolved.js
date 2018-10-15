const { getNotSolved } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  if (res.locals.unlockCookie) {
    const data = req.params;
    const { solved } = data;
    getNotSolved(solved)
      .then((response) => {
        const result = response.rows;
        res.render('notSolved', {
          title: 'Not Solved',
          style: 'master',
          result,
          manager: true,
        });
      })
      .catch(error => next(error));
  } else {
    res.redirect(401, '/login');
  }
};
