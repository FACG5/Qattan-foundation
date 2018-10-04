const dbConnection = require('../database/dbConnection');

const getInventory = () => {
  const sql = {
    text: 'SELECT * FROM inventory ;',
  };
  return dbConnection.query(sql);
};

const addInventory = (newInventory) => {
  const {
    assNo,
    inventoryId,
    device,
    name,
    brand,
    description,
    cdkey,
    employee,
    place,
    vendor,
    priceUsd,
    priceNis,
    purchaseDate,
    warranty,
    serialNo,
    processor,
    ram,
    hd1,
    hd2,
    notes,
    netport,
    status,
  } = newInventory;
  const sql = {
    text: 'INSERT INTO inventory (ass_no, inventory_id, device, name, brand, description, cdkey, employee, place, vendor, price_usd, price_nis, purchase_date, warranty, serial_no, processor, ram, hd1, hd2, notes, netport, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22);',
    values: [assNo,
      inventoryId,
      device,
      name,
      brand,
      description,
      cdkey,
      employee,
      place,
      vendor,
      priceUsd,
      priceNis,
      purchaseDate,
      warranty,
      serialNo,
      processor,
      ram,
      hd1,
      hd2,
      notes,
      netport,
      status],
  };
  return dbConnection.query(sql);
};

const updateInventory = (itEmployee, status, ticketNo) => {
  const sql = {
    text: 'UPDATE ticket SET status_type = $1, it_employee = $2 WHERE ticket_no = $3;',
    values: [itEmployee, status, ticketNo],
  };
  return dbConnection.query(sql);
};

module.exports = {
  getInventory,
  addInventory,
  updateInventory,
};
