const express = require("express");
const { createRole, displayRole } = require("../controllers/RoleController");
 
const router = express.Router();

router.post("/", createRole);
router.get("/view-role", displayRole);

module.exports = router;
