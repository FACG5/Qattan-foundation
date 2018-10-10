const dbConnection = require('../database/dbConnection');

const getLatestTicket = () => {
  const sql = {
    text: 'SELECT * FROM ticket ORDER BY ticket_no DESC LIMIT 5;',
  };
  return dbConnection.query(sql);
};

const getAllTicket = () => {
  const sql = {
    text: 'SELECT * FROM ticket ORDER BY ticket_no DESC;',
  };
  return dbConnection.query(sql);
};

const getTicketByName = (name) => {
  const sql = {
    text: 'SELECT * FROM ticket WHERE employee = $1;',
    values: [name],
  };
  return dbConnection.query(sql);
};

const getTicketDetails = (id) => {
  const sql = {
    text: 'SELECT * FROM ticket WHERE ticket_no = $1;',
    values: [id],
  };
  return dbConnection.query(sql);
};

const getTicketCount = () => {
  const sql = {
    text: 'SELECT COUNT(ticket_no) FROM ticket',
  };
  return dbConnection.query(sql);
};

const getSolvedCount = () => {
  const sql = {
    text: 'SELECT COUNT(ticket_no) FROM ticket WHERE status_type LIKE $1',
    values: ['solved'],
  };
  return dbConnection.query(sql);
};

const getNotSolvedCount = () => {
  const sql = {
    text: 'SELECT COUNT(ticket_no) FROM ticket WHERE status_type LIKE $1',
    values: ['not_solved'],
  };
  return dbConnection.query(sql);
};

const getSupports = () => {
  const sql = {
    text: 'SELECT * FROM ticket WHERE type LIKE $1 AND status_type NOT LIKE $2;',
    values: ['support', 'solved'],
  };
  return dbConnection.query(sql);
};

const getLoans = () => {
  const sql = {
    text: 'SELECT * FROM ticket WHERE type LIKE $1 AND status_type NOT LIKE $2;',
    values: ['loan', 'solved'],
  };
  return dbConnection.query(sql);
};

const getTicketByStatus = (status) => {
  const sql = {
    text: 'SELECT * FROM ticket WHERE status_type LIKE $1',
    values: [status],
  };
  return dbConnection.query(sql);
};
const getTicketByPeriod = (data) => {
  const { minPeriod, maxPeriod } = data;
  const sql = {
    text: 'SELECT * FROM ticket WHERE ticket_date BETWEEN $1 and $2 ORDER BY ticket_date ASC',
    values: [minPeriod, maxPeriod],
  };
  return dbConnection.query(sql);
};

const addTicket = (newTicket) => {
  const {
    employee, department, problemType, subject, duration, technicalDesc, type,
  } = newTicket;
  const sql = {
    text: 'INSERT INTO ticket (employee,department,problem_type,subject,duration,technical_desc,type) VALUES ($1, $2, $3, $4, $5, $6, $7);',
    values: [employee, department, problemType, subject, duration, technicalDesc, type],
  };
  return dbConnection.query(sql);
};

const updateTicket = (data) => {
  const {
    statusType, itEmployeeName, description, ticketNo,
  } = data;

  const sql = {
    text: 'UPDATE ticket SET status_type = $1, it_employee = $2, technical_desc = $3 WHERE ticket_no = $4;',
    values: [statusType, itEmployeeName, description, ticketNo],
  };
  return dbConnection.query(sql);
};

module.exports = {
  getLatestTicket,
  getAllTicket,
  getTicketByName,
  getTicketDetails,
  getTicketCount,
  getSolvedCount,
  getNotSolvedCount,
  getSupports,
  getLoans,
  getTicketByStatus,
  getTicketByPeriod,
  addTicket,
  updateTicket,
};
