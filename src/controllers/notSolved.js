const { getNotSolved } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
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
};
