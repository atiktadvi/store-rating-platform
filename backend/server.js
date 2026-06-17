const express = require("express");
const cors = require("cors");

require("./config/db");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const storeRoutes = require("./routes/storeRoutes");
const ownerRoutes = require("./routes/ownerRoutes");

const verifyToken = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(
  "/api/admin",
  verifyToken,
  roleMiddleware("admin"),
  adminRoutes
);

app.use(
  "/api/stores",
  verifyToken,
  storeRoutes
);

app.use(
  "/api/owner",
  verifyToken,
  roleMiddleware("owner"),
  ownerRoutes
);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});