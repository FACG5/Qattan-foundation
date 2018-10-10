exports.clientError = (req, res) => {
  res.status(404).render('error', {
    layout: 'error',
    title: 'Error 404',
    style_error: 'error',
    sCode: '404',
    errorMsg: 'Page not found',
  });
};


exports.serverError = (err, req, res, next) => {
  if (req.method === 'POST') {
    return res.status(err.status || 500).send({ Error: err.message || 'Internal Server Error' });
  }
  res.status(500).render('error', {
    layout: 'error',
    title: 'Error 500',
    style_error: 'error',
    sCode: '500',
    errorMsg: 'Internal Server Error',
  });
};
