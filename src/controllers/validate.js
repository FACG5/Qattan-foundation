exports.checkString = (req, res, next) => {
  if (req.body.inventoryId == '') req.body.inventoryId = null;
  if (req.body.priceUsd == '') req.body.priceUsd = null;
  if (req.body.priceNis == '') req.body.priceNis = null;
  if (req.body.purchaseDate == '') req.body.purchaseDate = null;
  if (req.body.warranty == '') req.body.warranty = null;
  if (req.body.hd1 == '') req.body.hd1 = null;
  if (req.body.hd2 == '') req.body.hd2 = null;
  if (req.body.status == '') req.body.status = null;
  next();
};
