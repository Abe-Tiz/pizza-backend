const express = require("express");
const { createMenuItem, displayMenu, deleteMenuItem } = require("../controllers/MenuController");
const upload = require("../uploads/Upload");
const router = express.Router();

router.get("/get-menu", displayMenu);
router.post("/", upload.single("photo"), createMenuItem);
router.delete("/delete/:id", deleteMenuItem);


module.exports = router;