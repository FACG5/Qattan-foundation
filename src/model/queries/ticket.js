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

const getTicketDetails = (id) => {
  const sql = {
    text: 'SELECT * FROM ticket Where ticket_no = $1;',
    values: [id],
  };
  return dbConnection.query(sql);
};

const getTicketCount = () => {
  const sql = {
    text: 'SELECT COUNT(ticket_no) from ticket',
  };
  return dbConnection.query(sql);
};

const getSolvedCount = () => {
  const sql = {
    text: 'SELECT COUNT(ticket_no) from ticket Where status_type like $1',
    values: ['solved'],
  };
  return dbConnection.query(sql);
};

const getNotSolvedCount = () => {
  const sql = {
    text: 'SELECT COUNT(ticket_no) from ticket Where status_type like $1',
    values: ['not_solved'],
  };
  return dbConnection.query(sql);
};

const getSupports = () => {
  const sql = {
    text: 'SELECT * FROM ticket Where type like $1',
    values: ['support'],
  };
  return dbConnection.query(sql);
};

const getLoans = () => {
  const sql = {
    text: 'SELECT * FROM ticket Where type like $1',
    values: ['loan'],
  };
  return dbConnection.query(sql);
};

module.exports = {
  getLatestTicket,
  getTicketByName,
  getSolvedCount,
  getTicketCount,
  getTicketDetails,
  getNotSolvedCount,
  getSupports,
  getLoans,
};
