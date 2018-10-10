exports.clientError = (req, res) => {
  res.status(404).render('error', {
    layout: 'error',
    title: 'Error 404',
    style_error: 'error',
    statusCode: '404',
    errorMsg: 'Page not found',
  });
};

exports.serverError = (error, req, res) => {
  res.status(500).render('error', {
    layout: 'error',
    title: 'Error 500',
    statusCode: '500',
    errorMsg: 'Internal Server Error',
  });
};
