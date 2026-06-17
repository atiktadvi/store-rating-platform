const express = require("express");
const router = express.Router();

const {
  getAllStores,
  submitRating,
  updateRating,
} = require("../controllers/storeController");

router.get("/", getAllStores);

router.post("/rating", submitRating);

router.put("/rating", updateRating);

module.exports = router;