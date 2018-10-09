const {
  getInventory, getInventoryById, addInventory, updateInventory, getEmployee, getBrand, getDevice, getPlace, getVendor
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
    console.log(req.body);
    const addInventorydb = await (addInventory(req.body));
    console.log(addInventorydb.rowCount);
  } catch (error) {
    next(error);
  }
};

exports.updateInventoryPage = async (req, res, next) => {
  try {
    const inventorydb = await getInventoryById(req.params.id);
    const employeesdb = await getEmployee();
    const brandsdb = await getBrand();
    const devicesdb = await getDevice();
    const placesdb = await getPlace();
    const vendorsdb = await getVendor();
    const PurchDate = JSON.stringify(inventorydb.rows[0].purchase_date).split('T')[0]+'"';
    console.log(JSON.parse(PurchDate));
    res.render('updateInventoryPage', {
      style: 'master',
      title: 'الأجهزة',
      manager: true,
      dom: 'updateInventoryPage',
      inventory: inventorydb.rows[0],
      employees: employeesdb.rows,
      brands: brandsdb.rows,
      devices: devicesdb.rows,
      places: placesdb.rows,
      vendors: vendorsdb.rows,
      PurchDateObj: JSON.parse(PurchDate),
    });
  } catch (error) {
    next(error);
  }
};
exports.updateInventoryFun = async( req, res, next ) => {
  // const obj = {
  //   description: "coooo",
  //   employee: 'salwa',
  //   place: 'place3',
  //   warranty: 3,
  //   processor: '3',
  //   ram: 14,
  //   hd1: 13,
  //   hd2: 12,
  //   notes: 'hh',
  //   netport: 'b',
  //   status: 0,
  //   id:8,
  // };
  try {
    const updateInventorydb = await (updateInventory(req.body));
    console.log(updateInventorydb.rowCount);
  } catch (error) {
    next(error);
  }
};
