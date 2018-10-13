const dbConnection = require('../database/dbConnection');

const getInventory = () => {
  const sql = {
    text: 'SELECT * FROM inventory ;',
  };
  return dbConnection.query(sql);
};

const getInventoryByName = (name) => {
  const sql = {
    text: 'SELECT * FROM inventory WHERE employee = $1;',
    values: [name],
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

const updateInventory = (description,
  employee, place, warranty, serialNo, processor, ram, hd1, hd2, notes, netport, status, id) => {
  const sql = {
    text: 'UPDATE inventory SET description = $1, employee = $2, place = $3, warranty = $4, serial_no = $5, processor = $6, ram =$7, hd1 =$8, hd2 =$9, notes= $10, netport = $11, status =$12 where id=$13;',
    values: [
      description,
      employee,
      place,
      warranty,
      serialNo,
      processor,
      ram,
      hd1,
      hd2,
      notes,
      netport,
      status,
      id],
  };
  return dbConnection.query(sql);
};

module.exports = {
  getInventory,
  getInventoryByName,
  addInventory,
  updateInventory,
};
