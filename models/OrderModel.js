const { pool } = require("../config/Db");

const addOrderItem = async (
  name,
  toppings,
  price,
  photo,
  quantity,
  status,
  customer_id
) => {
  if (!Array.isArray(toppings)) {
    toppings = [toppings];
  }
  const newOrder = await pool.query(
    `INSERT INTO "order" (name, toppings, price, photo, quantity, status, customer_id) VALUES ($1, $2::text[], $3, $4, $5, $6, $7) RETURNING *`,
    [name, toppings, price, photo, quantity, status, customer_id]
  );

  return newOrder.rows[0];
};

const getOrder = async () => {
  const result = await pool.query(`
    SELECT o.*, c.phone
    FROM "order" o
    JOIN "customer" c ON o.customer_id = c.id
  `);
  return result.rows;
};

const getSpecificOrder = async (customer_id) => {
  const result = await pool.query(
    `SELECT * FROM "order" WHERE customer_id = $1`,
    [customer_id]
  );
  return result.rows;
};

module.exports = {
  addOrderItem,
  getOrder,
  getSpecificOrder,
};
