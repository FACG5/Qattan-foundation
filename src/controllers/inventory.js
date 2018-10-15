const {
  getInventory, getInventoryById, addInventory, updateInventory,
  getEmployee, getBrand, getDevice, getPlace, getVendor, getType, getAction, getParts, addRepairInventories,
  checkInfoExist, deleteInventory, viewRepair,
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
      const viewRepairdb = await viewRepair();

      res.render('inventory', {
        style: 'master',
        title: 'الأجهزة',
        manager: true,
        style_special: 'form',
        dom: 'inventory',
        inventories: inventoriesdb.rows,
        employees: employeesdb.rows,
        brands: brandsdb.rows,
        devices: devicesdb.rows,
        places: placesdb.rows,
        vendors: vendorsdb.rows,
        repaired: viewRepairdb.rows,
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
    if (res.locals.unlockCookie) {
      const inventorydb = await getInventoryById(req.params.id);
      const employeesdb = await getEmployee();
      const brandsdb = await getBrand();
      const devicesdb = await getDevice();
      const placesdb = await getPlace();
      const vendorsdb = await getVendor();
      const PurchDate = `${JSON.stringify(inventorydb.rows[0].purchase_date).split('T')[0]}"`;
      const typedb = await getType();
      const actiondb = await getAction();
      const partdb = await getParts();

    res.render('updateInventoryPage', {
      style: 'master',
      title: 'الأجهزة',
      manager: true,
      style_special: 'form',
      dom: 'updateInventoryPage',
      inventory: inventorydb.rows[0],
      employees: employeesdb.rows,
      brands: brandsdb.rows,
      devices: devicesdb.rows,
      places: placesdb.rows,
      vendors: vendorsdb.rows,
      PurchDateObj: JSON.parse(PurchDate),
      type: typedb.rows,
      action: actiondb.rows,
      parts: partdb.rows,
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

exports.addRepairInventory = async (req, res, next) => {
  try {
    const addRepairInventoriesdb = await (addRepairInventories(req.body));
    if (addRepairInventoriesdb.rowCount === 1) {
      console.log(addRepairInventoriesdb, 'kkkkkk');
      return res.send({ result: 'تم الإضافة بنجاح' });
    }
    res.send({ Erorr: 'أعد المحاولة مرة أخرى' });
  } catch (error) {
    next(error);
  }
};

exports.deleteInventories = async (req, res, next) => {
  try {
    const checkInfoExistdb = await (checkInfoExist(req.body.inventoryId));
    if (checkInfoExistdb.rowCount === 1) {
      return res.send({ result: ' لا يمكن حذف هذا الجهاز لوجوده في قاعدة البيانات', opType: 'error' });
    }
    const deleteInventorydb = await (deleteInventory(req.body.inventoryId));
    if (deleteInventorydb.rowCount === 1) {
      return res.send({ result: 'تم حذف الجهاز بنجاح', opType: 'success' });
    }
    res.send({ Erorr: 'أعد المحاولة مرة أخرى' });
  } catch (error) {
    next(error);
  }
};
