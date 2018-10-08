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
    text: 'SELECT * FROM ticket WHERE type like $1 and status_type NOT LIKE $2;',
    values: ['support', 'solved'],
  };
  return dbConnection.query(sql);
};

const getLoans = () => {
  const sql = {
    text: 'SELECT * FROM ticket WHERE type like $1 and status_type NOT LIKE $2;',
    values: ['loan', 'solved'],
  };
  return dbConnection.query(sql);
};

const getTicketByStatus = (status) => {
  const sql = {
    text: 'SELECT * FROM ticket Where status_type like $1',
    values: [status],
  };
  return dbConnection.query(sql);
};
const getTicketByPeriod = (minPeriod, maxPeriod) => {
  const sql = {
    text: 'SELECT * FROM ticket Where ticket_date between $1 and $2 order by ticket_date asc',
    values: [minPeriod, maxPeriod],
  };
  return dbConnection.query(sql);
};

const addTicket = (newTicket) => {
  const {
    employee, department, problemType, subject, duration, technicalDesc, type,priority,
  } = newTicket;
  const sql = {
    text: 'INSERT INTO ticket (employee,department,problem_type,subject,duration,technical_desc,type, priority) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);',
    values: [employee, department, problemType, subject, duration, technicalDesc, type, priority],
  };
  return dbConnection.query(sql);
};
const obj = {
  employee: "salwa",
  department: "qss",
  problemType: "hardware",
  subject: "whatever",
  duration: 1,
  technicalDesc: "anything",
  type: "support",
  priority: "عالية"
}

addTicket(obj).then((result) => {
  console.log(result);
});

const updateTicket = (itEmployee, status, ticketNo) => {
  const sql = {
    text: 'UPDATE ticket SET status_type = $1, it_employee = $2 WHERE ticket_no = $3;',
    values: [itEmployee, status, ticketNo],
  };
  return dbConnection.query(sql);
};

module.exports = {
  getLatestTicket,
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
