const { addOrderItem, getOrder, getSpecificOrder } = require("../models/OrderModel");

const createOrderItem = async (req, res) => {
  const { name, toppings, price, photo, quantity, status, customer_id } =
    req.body;
    if (!name) {
     console.log({ error: "Name is required" })
   return res.status(400).json({ error: "Name is required" });
  }
  try {
    const newOrder =await addOrderItem(name, toppings, price, photo,quantity,status, customer_id);
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const displayOrder = async (req, res) => {
  try {
    const order = await getOrder();
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const OrderedCustomerHistory = async (req,res) =>{
  try {
    const { customer_id } = req.body;
    const specificOrder = await getSpecificOrder(customer_id);
    console.log("history:", specificOrder);
    res.status(200).json(specificOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createOrderItem,
  displayOrder,
  OrderedCustomerHistory,
};