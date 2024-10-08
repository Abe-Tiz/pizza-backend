// routes/userRoutes.js
const express = require("express");
const { register, getAdmin, loginAdmin, customerRegister, loginUser } = require("../controllers/userController");


const router = express.Router();

router.get("/admin",  getAdmin);
router.post("/register",  register);
router.post("/login", loginAdmin);
router.post("/create-customer", customerRegister);
router.post("/login-user", loginUser);

module.exports = router;
