const express = require("express");
const router = express.Router();

// import  protected-routes middlewares
const {protectedSuser} = require("../middlewares/authMiddlewares");


//import controllers
const {
    getSuserProfile,
    updateSuserProfile,
    deleteSuserProfile,
    allProfiles,

    // getInvoice
} = require("../controllers/suserController");

//suser profile routes

router.route("/profile").get(protectedSuser,getSuserProfile);
router.route("/updateProfile").put(protectedSuser,updateSuserProfile);
router.route("/deleteProfile").delete(protectedSuser,deleteSuserProfile);
router.route("/allProfiles").get(allProfiles);

module.exports = router; 