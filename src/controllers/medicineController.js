const MedicineModel = require('../models/Medicine.js');
const { validateMedicine } = require('../validators/medicineValidator.js');

module.exports.createMedicine = async (req, res, _next) => {
    const { error, value } = validateMedicine({
      medicineName: req.body.medicineName,
      quantity: req.body.quantity,
      expDate: new Date(req.body.expDate),
      category: req.body.category,
      description: req.body.description,
      imgUrl: req.body.imgUrl,
    });
    if (error) {
      res.status(400).send(error.message);
      return;
    }
    const medicine = new MedicineModel({
      ...value,
    });
    await medicine.save();
    res.status(200).json(medicine.toJSON());
  };

  module.exports.getMedicine = async (req, res, _next) => {
    const medicines = await MedicineModel.find();
    res.status(200).json(
      medicines.map((n) => {
        const medicine = n.toJSON();
        return medicine;
      })
    );
  };

  module.exports.getMedicineById = async(req, res) => {
      let id = req.params.id;
      const medicineById = await MedicineModel.findById(id)
      .then((medicine) => {
          res.status(200).send({status: "Medicine fetched", medicine});
      }).catch((err) => {
         
          res.status(500).send({status: "Error with get medicine",error: err.message});
      })
  }

  module.exports.searchMedicine = async(req, res) => {
    let result = await MedicineModel.find({
      "$or":[
        {
          medicineName: {$regex: req.params.key}
        },
        {
          category: {$regex: req.params.key}
        }
      ]
    })
    res.send(result);
}

  module.exports.updateMedicine = async (req, res, _next) => {
      let id = req.params.id;
      const {medicineName, quantity, expDate, category, description, imgUrl} =req.body;
  
      const medicine = {
        medicineName,
        quantity,
        expDate,
        category,
        description,
        imgUrl,
      }  
      const update = await MedicineModel.findByIdAndUpdate(id,medicine)
      .then(() => {
      res.status(200).send({status: "Medicine update"})
   }).catch((err) => {
     
      res.status(500).send({status: "Error with updating data"});
   })
  };
  
  module.exports. deleteMedicine = async (req, res, _next) => {
    let id = req.params.id;

    await MedicineModel.findByIdAndDelete(id)
    .then(() => {
        res.status(200).send({status: "Medicine delete"});
    }).catch(() => {
        res.send(err.message);
        res.status(500).send({status: "Error with delete medicine", error: err.message})
    })
  };
  