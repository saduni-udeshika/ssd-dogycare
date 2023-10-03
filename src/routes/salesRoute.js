const express = require('express');
const { getMedicineSales, createSales } = require('../controllers/salesController.js');
const router = express.Router();


router.get('/',getMedicineSales);

router.post('/', createSales);

module.exports = router;