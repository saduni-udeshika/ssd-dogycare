const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema(
    {
      medicineName: String,
      quantity: Number,
      expDate: Date,
      category: String,
      description: String,
      imgUrl: String,
    },
    { timestamps: true }
  );
  
  const MedicineModel = mongoose.model('Medicine', MedicineSchema);
  
  module.exports = MedicineModel;