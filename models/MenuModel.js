const { pool } = require("../config/Db");

const addMenuItem = async (name, toppings, price, photo,restaurant_id) => {
  if (!Array.isArray(toppings)) {
    toppings = [toppings];
  }

  const newMenu = await pool.query(
    "INSERT INTO menu (name, toppings, price, photo,restaurant_id) VALUES ($1, $2::text[], $3, $4,$5) RETURNING *",
    [name, toppings, price, photo,restaurant_id]  
  );

  return newMenu.rows[0];
};

const getMenu = async () => {
  const result = await pool.query(`SELECT m.*,u.restaurantName,u.logo FROM "menu" m join "users" u  on m.restaurant_id = u.id`);
  return result.rows;
};

const deleteMenu = async (id) => {
  const result = await pool.query(
    "DELETE FROM menu WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows;
};

module.exports = {
  addMenuItem,
  getMenu,
  deleteMenu,
};
