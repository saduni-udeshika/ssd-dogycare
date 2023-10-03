const Joi = require('joi');

const salesValidator = Joi.object({
  medicineName: Joi.string().label('Medicine Name').required(),
  soldQuantity: Joi.number().label("Sold Quantity").required(),
  category: Joi.string().label('Category').required(),
  soldPrice: Joi.number().label('Sold Price').required(),
  remainingAmount: Joi.number().label('Remaining Amount').required(),
});

const validateSales= (data) => {
  return salesValidator.validate(data);
};
module.exports = {validateSales};