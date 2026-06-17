const express = require("express");
const router = express.Router();

const {
  ownerDashboard,
  getStoreRatings,
} = require("../controllers/ownerController");

router.get("/dashboard", ownerDashboard);

router.get("/ratings", getStoreRatings);

module.exports = router;