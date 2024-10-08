
const { z } = require("zod");

const registerSchema = z.object({
  adminName: z.string().min(1, "Admin name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  restaurantName: z.string().min(1, "Restaurant name is required"),
  location: z.string().min(1, "Location is required"),
  phone: z.string().min(10, "Phone number must be at least 10 characters long"),
  logo: z.string().optional(),  
});

const customerRegisterSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  location: z.string().min(1, "Location is required"),
  phone: z.string().min(10, "Phone number must be at least 10 characters long"), 
});

const roleSchema = z.object({
  name: z.string().min(1, "Name is required"),
  permission: z
    .array(z.string())
    .nonempty("Permission must be a non-empty array"),
});

module.exports = { registerSchema, customerRegisterSchema ,roleSchema};
