const { getLatestTicket } = require('../model/queries/ticket');

exports.get = (req, res, next) => {
  getLatestTicket()
    .then((response) => {
      res.render('homeManager', {
        style: 'master',
        title: 'Manager',
        dom: 'homeManager',
        response,
      });
    })
    .catch(error => next(error));
};
