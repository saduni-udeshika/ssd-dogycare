const express = require('express');

const {addNewDog,viewDogs,viewOneDog,deleteDog,updateDog} = require ('../controllers/dogController')

const router = express.Router();

//add new dog 
router.post("/add", addNewDog);

//delete existing one
router.delete("/delete/:id", deleteDog);

//update existing evaluation
router.put("/update/:id", updateDog);

//view all dogs
router.get("/", viewDogs);

//view one dog
router.get("/:id", viewOneDog);

module.exports = router;