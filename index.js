
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// routes
const userRoutes = require("./routes/UserRoute");
const menuRoutes = require("./routes/MenuRoute");
const roleRoutes = require("./routes/RoleRoute");
const orderRoutes = require("./routes/OrderRoute");

const { checkConnection } = require("./config/Db");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

checkConnection();
// Routes
app.use("/user", userRoutes);
app.use("/menu", menuRoutes);
app.use("/role", roleRoutes);
app.use("/order", orderRoutes);


app.get("/", async (req, res) => {
  res.send("Hello ")
})
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
