const dbConnection = require('../database/dbConnection');

exports.getUserData = (userName) => {
  const sql = {
    text: 'SELECT * FROM employee Where name = $1;',
    values: [userName],
  };
  return dbConnection.query(sql);
};
