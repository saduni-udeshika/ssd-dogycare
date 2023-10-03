const express = require('express');
const {createMedicine, deleteMedicine, getMedicine, updateMedicine, getMedicineById, searchMedicine} = require('../controllers/medicineController.js');
const router = express.Router();
const cloudinary = require('../utils/cloudinary');
const upload = require ('../utils/multer');

router.post("/upload", upload.single("image"), async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  });

router.get('/',getMedicine);

router.get('/:id', getMedicineById)

router.get('/search/:key', searchMedicine)

router.post('/', createMedicine);

router.delete('/:id',  deleteMedicine);

router.put('/:id', updateMedicine);

module.exports = router;