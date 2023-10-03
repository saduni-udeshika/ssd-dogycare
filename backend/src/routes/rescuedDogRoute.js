const router = require("express").Router();

const {addNewRescuedDog,viewRescuedDogs,addNewAdoption,viewOneRescuedDog, updateRescuedDog,deleteRescuedDogsDetails,updateAdoptDog} = require ('../controllers/rescuedDogController.js')

//add new dog 
router.post("/add", addNewRescuedDog);


//add new Adoption 
//router.post("/addNewAdoption", addNewAdoption);

//view all dogs
router.get("/", viewRescuedDogs);


//update existing dog
 router.put("/updateAdoptDog/:id",updateAdoptDog);



//delete existing one
 router.delete("/delete/:id",deleteRescuedDogsDetails);


 //update existing dog
 //router.put("/update/:id", updateRescuedDog);


//view one dog
router.get("/get/:id", viewOneRescuedDog);

module.exports = router;