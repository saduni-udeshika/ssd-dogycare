const SalesModel = require('../models/Sales.js');
const { validateSales } = require('../validators/salesValidator.js');

module.exports.createSales = async (req, res, _next) => {
    const { error, value } = validateSales({
      medicineName: req.body.medicineName,
      soldQuantity: req.body.soldQuantity,
      category: req.body.category,
      soldPrice: req.body.soldPrice,
      remainingAmount: req.body.remainingAmount,
    });
    if (error) {
      res.status(400).send(error.message);
      return;
    }
    const sales = new SalesModel({
      ...value,
    });
    await sales.save();
    res.status(200).json(sales.toJSON());
  };

  module.exports.getMedicineSales = async (req, res, _next) => {
    const sales = await SalesModel.find();
    res.status(200).json(
        sales.map((n) => {
        const sale = n.toJSON();
        return sale;
      })
    );
  };