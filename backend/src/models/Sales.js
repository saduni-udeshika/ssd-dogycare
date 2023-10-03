const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema(
    {
      medicineName: String,
      soldQuantity: Number,
      category: String,
      soldPrice: Number,
      remainingAmount: Number,
    },
    { timestamps: true }
  );
  
  const SalesModel = mongoose.model('Sales', SalesSchema);
  
  module.exports = SalesModel;