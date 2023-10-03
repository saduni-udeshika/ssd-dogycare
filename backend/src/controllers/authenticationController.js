const Admin = require("../models/Admin");
const Suser = require("../models/Suser");

exports.registerSuser = async (req, res, next) => {
  const { suserID, name, email, contactNumber, password } = req.body;

  try {
    const suser = await Suser.create({
      suserID,
      name,
      email,
      contactNumber,
      password,
    });
    sendToken(suser, 200, res);
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in registersuser" + error,
    });
  }
};

exports.registerAdmin = async (req, res, next) => {
  const { email, phoneno, password } = req.body;

  try {
    const admin = await Admin.create({
      email,
      phoneno,
      password,
    });
     const token = await Admin.getSignedToken();
    sendToken(admin, 201, res);
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in registersuser" + error,
    });
  }
};

exports.suserLogin = async (req, res, next) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      desc: "provide email, password",
    });
  }

  try {
    const suser = await Suser.findOne({ email: email }).select("+password");

    if (!suser) {
      res.status(404).json({
        success: false,
        error: "invalid credentials",
      });
    }

    const isMatch = await suser.matchPasswords(password);

    if (!isMatch) {
      res.status(401).json({
        success: false,
        error: "Invalid credentials - Please check again",
      });
    } else {
      sendToken(suser, 200, res);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.adminLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      desc: "provide email, password and role ",
    });
  }

  try {
    const admin = await Admin.findOne({ email: email }).select("+password");

    if (!admin) {
      res.status(404).json({
        success: false,
        error: "invalid credentials",
      });
    }

    const isMatch = await admin.matchPasswords(password);

    if (!isMatch) {
      res.status(401).json({
        success: false,
        error: "Invalid credentials - Please check again",
      });
    } else {
      sendToken(admin, 200, res);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ sucess: true, token, user });
};
