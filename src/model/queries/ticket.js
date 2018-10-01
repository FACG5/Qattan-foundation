const dbConnection = require('../dbConnection');

const getLatestTicket = () => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT * FROM ticket ORDER BY ticket_no DESC',
  };
  dbConnection.query(sql, (error, res) => {
    if (error) return reject(error);
    return resolve(res.rows);
  });
});

const getTicketByName = name => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT * FROM ticket Where employee = $1;',
    values: [name],
  };
  dbConnection.query(sql, (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res.rows);
    }
  });
});

module.exports = {
  getLatestTicket,
  getTicketByName,
};
