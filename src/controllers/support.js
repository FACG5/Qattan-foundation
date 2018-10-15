const { getSupports } = require('../model/queries/ticket');

exports.get = async (req, res, next) => {
  try {
    if (res.locals.unlockCookie) {
      const supports = await getSupports();
      res.render('support', {
        style: 'master',
        title: 'طلبات الدعم الفني',
        manager: true,
        response: supports.rows,
      });
    } else {
      res.redirect(401, '/login');
    }
  } catch (error) {
    next(error);
  }
};
