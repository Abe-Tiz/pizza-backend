const { pool } = require("../config/Db");

const addRole = async (name, permission) => {
  if (!Array.isArray(permission)) {
    permission = [permission];
  }

  const newRole = await pool.query(
    "INSERT INTO role (name, permission) VALUES ($1, $2::text[]) RETURNING *",
    [name, permission]
  );
}

const getRole = async () => {
  const result = await pool.query("SELECT * FROM role");
  return result.rows;
};

module.exports = {
  addRole,
  getRole,
};
