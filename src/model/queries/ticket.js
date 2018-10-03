const dbConnection = require('../database/dbConnection');

const getLatestTicket = () => {
  const sql = {
    text: 'SELECT * FROM ticket ORDER BY ticket_no DESC',
  };
  return dbConnection.query(sql);
};

const getTicketByName = (name) => {
  const sql = {
    text: 'SELECT * FROM ticket Where employee = $1;',
    values: [name],
  };
  return dbConnection.query(sql);
};

const getTicketDetails = (id)  => {
  const sql = {
    text: 'SELECT * FROM ticket Where ticket_no = $1;',
    values: [id],
  };
  return dbConnection.query(sql);
};

const getSupports = () => {
  const sql = {
    text: 'SELECT * FROM ticket Where type =$1',
    values: ['support'],
  };
  return dbConnection.query(sql);
};

const getLoans = () => {
  const sql = {
    text: 'SELECT * FROM ticket Where type =$1',
    values: ['loan'],
  };
  return dbConnection.query(sql);
};

module.exports = {
  getLatestTicket,
  getTicketByName,
  getTicketDetails,
  getSupports,
  getLoans,
};
