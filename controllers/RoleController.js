
const { addRole, getRole } = require("../models/RoleModel");
const { ZodError } = require("zod");
const { roleSchema } = require("../zod/Validation");

// create permission
const createRole = async (req, res) => {
  try {
    const validatedData = roleSchema.parse(req.body);

    const { name, permission } = validatedData;
    const newRole = await addRole(name, permission);
    res.status(201).json(newRole);
  } catch (error) {
    if (error instanceof ZodError) {
      res
        .status(400)
        .json({ error: "Validation error", details: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
};

const displayRole = async (req, res) => {
  try {
    const role = await getRole();
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createRole,
  displayRole,
};
