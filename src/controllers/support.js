const { getSupports } = require('../model/queries/ticket');

exports.get = async (req, res, next) => {
  try {
    const supports = await getSupports();
    res.render('support', {
      style: 'master',
      title: 'طلبات الدعم الفني',
      manager: true,
      response: supports.rows,
    });
  } catch (error) {
    next(error);
  }
};
