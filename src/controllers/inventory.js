const {
  getInventory, addInventory, updateInventory, getEmployee, getBrand, getDevice, getPlace, getVendor
} = require('../model/queries/inventory');

exports.viewInventory = async (req, res, next) => {
  try {
    const inventoriesdb = await getInventory();
    const employeesdb = await getEmployee();
    const brandsdb = await getBrand();
    const devicesdb = await getDevice();
    const placesdb = await getPlace();
    const vendorsdb = await getVendor();
    res.render('inventory', {
      style: 'master',
      title: 'الأجهزة',
      manager: true,
      dom: 'inventory',
      inventories: inventoriesdb.rows,
      employees: employeesdb.rows,
      brands: brandsdb.rows,
      devices: devicesdb.rows,
      places: placesdb.rows,
      vendors: vendorsdb.rows,
    });
  } catch (error) {
    next(error);
  }
};
exports.postInventory = async (req, res, next) => {
  try {
    const addInventorydb = await (addInventory(req.body));
    console.log(addInventorydb.rowCount);
  } catch (error) {
    next(error);
  }
};
