const { getTicketByName } = require('../model/queries/ticket');
const { getInventoryByName } = require('../model/queries/inventory');

exports.get = async (req, res, next) => {
  try {
    const department = res.locals.unlockCookie.department;
    const name = res.locals.unlockCookie.name;

    const tickets = await getTicketByName(name);
    const result = (tickets.rows);
    const resultSolved = [];
    const resultWaiting = [];
    result.forEach((ticket) => {
      if (ticket.status_type === 'solved') {
        resultSolved.push(ticket);
      } else {
        resultWaiting.push(ticket);
      }
    });
    const inventories = await getInventoryByName(name);
    const inventory = inventories.rows;
    res.render('employee', {
      title: 'الرئيسية',
      style: 'employee',
      dom: 'employee',
      headerFound: true,
      footerFound: true,
      manager: false,
      resultSolved,
      resultWaiting,
      inventory,
      name,
      department,
    });
  } catch (err) {
    next(err);
  }
};
