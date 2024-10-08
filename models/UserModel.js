// models/UserModel.js
const {pool} = require("../config/Db");

// create admin user
const createUser = async (userData) => {
  const { adminName, email, password, restaurantName, location, phone, logo,role } =
    userData;

  const result = await pool.query(
    "INSERT INTO users (adminName, email, password, restaurantName, location, phone, logo,role) VALUES ($1, $2, $3, $4, $5, $6, $7,$8) RETURNING *",
    [adminName, email, password, restaurantName, location, phone, logo,role]
  );

  return result.rows[0];
};

// create customer
const createCustomer = async (userData) => {
  const { email, password, location, phone } =
    userData;

  const result = await pool.query(
    "INSERT INTO customer (email, password,location, phone) VALUES ($1, $2, $3, $4) RETURNING *",
    [email, password, location, phone]
  );

  return result.rows[0];
};

// get customer
const getCustomerByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM customer WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};
// get customer by id
const getCustomerById = async (customer_id) => {
  const result = await pool.query("SELECT * FROM customer WHERE customer_id = $1", [
    customer_id,
  ]);
  return result.rows[0];
};

// get user
const getUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};

// get all admin 
const getAdmins = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};



module.exports = {
  createUser,
  getUserByEmail,
  getAdmins,
  getCustomerByEmail,
  createCustomer,
  getCustomerById,
};
