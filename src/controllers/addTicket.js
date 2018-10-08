exports.get = (req, res, next) => {
  res.render('addTicket', {
    title: 'اضافة تذكرة',
    style: 'addTicket',
    dom: 'empHome',
    manager: false,
  });
};
