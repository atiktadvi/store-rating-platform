const express = require("express");
const router = express.Router();

const {
  getDashboard,
  addStore,
  getAllUsers,
  addUser,
  getUserById,
} = require("../controllers/adminController");

router.get("/dashboard", getDashboard);

router.post("/add-store", addStore);

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

router.post("/add-user", addUser);

module.exports = router;