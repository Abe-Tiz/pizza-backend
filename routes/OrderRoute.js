const express = require("express");
const router = express.Router();
const {createOrderItem, displayOrder, OrderedCustomerHistory} = require("../controllers/OrderController")

router.post("/", createOrderItem);
router.get("/get-order", displayOrder);
router.post("/get-customer-order", OrderedCustomerHistory);

module.exports = router;