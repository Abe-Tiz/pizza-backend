
const { addMenuItem, getMenu, deleteMenu } = require("../models/MenuModel");

const path = require("path");
const menuModelPath = path.resolve(__dirname, "../models/menuModel");
const { addMenuItem, getMenu, deleteMenu } = require(menuModelPath);
// create menu item
const createMenuItem = async (req, res) => {
  const { name, toppings, price,restaurant_id } = req.body;
  const photo = req.file ? req.file.path : null;  

  try {
    const newMenu = await addMenuItem(name, toppings, price, photo,restaurant_id);
    res.status(201).json(newMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};   

const displayMenu = async (req, res) => {
  try {
    const menu = await getMenu();
    res.status(200).json(menu)
  } catch (error) {
    res.status(500).json(error);
  }
}

// Delete menu item by ID
const deleteMenuItem = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await deleteMenu(id);

    if (deletedItem.length === 0) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    return res.status(200).json({ message: 'Menu item deleted successfully', deletedItem });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createMenuItem,
  displayMenu,
  deleteMenuItem,
};
