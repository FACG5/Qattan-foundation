const {
  getInventory, getInventoryById, addInventory, updateInventory,
  getEmployee, getBrand, getDevice, getPlace, getVendor,
} = require('../model/queries/inventory');

exports.viewInventory = async (req, res, next) => {
  try {
    if (res.locals.unlockCookie) {
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
    } else {
      res.redirect(401, '/login');
    }
  } catch (error) {
    next(error);
  }
};
exports.postInventory = async (req, res, next) => {
  try {
    const addInventorydb = await (addInventory(req.body));
    if (addInventorydb.rowCount === 1) {
      return res.send({ result: 'تم الإضافة بنجاح' });
    }
    res.send({ Erorr: 'أعد المحاولة مرة أخرى' });
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
    const PurchDate = `${JSON.stringify(inventorydb.rows[0].purchase_date).split('T')[0]}"`;
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
exports.updateInventoryFun = async (req, res, next) => {
  try {
    const updateInventorydb = await (updateInventory(req.body));
    if (updateInventorydb.rowCount === 1) {
      return res.send({ result: 'تم التحديث بنجاح' });
    }
    res.send({ Erorr: 'أعد المحاولة مرة أخرى' });
  } catch (error) {
    next(error);
  }
};
