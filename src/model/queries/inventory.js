const dbConnection = require('../database/dbConnection');

exports.getInventory = () => {
  const sql = {
    text: 'SELECT * FROM inventory ;',
  };
  return dbConnection.query(sql);
};

exports.getInventoryById = (InventoryId) => {
  const sql = {
    text: 'SELECT * FROM inventory WHERE id = $1 ;',
  };
  return dbConnection.query(sql, [InventoryId]);
};

exports.addInventory = (newInventory) => {
  const {
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
    text: 'INSERT INTO inventory ( inventory_id, device, name, brand, description, cdkey, employee, place, vendor, price_usd, price_nis, purchase_date, warranty, serial_no, processor, ram, hd1, hd2, notes, netport, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21);',
    values: [
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

exports.updateInventory = (inventory) => {
  const {
    description, employee, place, warranty, processor, ram, hd1, hd2, notes, netport, status, id,
  } = inventory;
  const sql = {
    text: 'UPDATE inventory SET description = $1, employee = $2, place = $3, warranty = $4, processor = $5, ram =$6, hd1 =$7, hd2 =$8, notes= $9, netport = $10, status =$11 where id=$12;',
    values: [
      description,
      employee,
      place,
      warranty,
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

exports.getEmployee = () => {
  const sql = {
    text: 'SELECT * FROM employee ;',
  };
  return dbConnection.query(sql);
};

exports.getBrand = () => {
  const sql = {
    text: 'SELECT * FROM brand ;',
  };
  return dbConnection.query(sql);
};

exports.getDevice = () => {
  const sql = {
    text: 'SELECT * FROM device ;',
  };
  return dbConnection.query(sql);
};

exports.getPlace = () => {
  const sql = {
    text: 'SELECT * FROM place;',
  };
  return dbConnection.query(sql);
};

exports.getVendor = () => {
  const sql = {
    text: 'SELECT * FROM vendor;',
  };
  return dbConnection.query(sql);
};
