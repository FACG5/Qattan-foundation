const app = require('./app');

const server = app.listen(app.get('port'), () => {
  console.log(`The Server is running at port ${app.get('port')}`);
});
