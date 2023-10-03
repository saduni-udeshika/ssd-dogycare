const express = require("express");
const router = express.Router();

// import controllers
const {
  registerSuser,
  suserLogin,
  adminLogin,
  registerAdmin,
  
} = require("../controllers/authenticationController");
 
//register Routes

router.route("/registersuser").post(registerSuser);
// router.route("/registerstaff").post(registerStaff);
router.route("/registeradmin").post(registerAdmin);

//login routes
router.route("/suserlogin").post(suserLogin);
// router.route("/stafflogin").post(staffLogin);
router.route("/adminlogin").post(adminLogin);


//router.route("/forgotpassword").post(forgotpassword);

//router.route("/resetpassword/:resetToken").post(resetpassword);

module.exports = router;