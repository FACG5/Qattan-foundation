const { getLoans } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  if (res.locals.unlockCookie) {
    getLoans()
      .then((response) => {
        const result = response.rows;
        res.render('loans', {
          title: 'طلبات الاستعارة',
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
