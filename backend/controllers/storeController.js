const db = require("../config/db");

const getAllStores = (req, res) => {
  const userId = req.user.id;

  const { name, address, sort } = req.query;

  let sql = `
    SELECT
      stores.id,
      stores.name,
      stores.address,
      ROUND(AVG(ratings.rating),1) AS overall_rating,
      (
        SELECT rating
        FROM ratings r2
        WHERE r2.store_id = stores.id
        AND r2.user_id = ?
        LIMIT 1
      ) AS user_rating
    FROM stores
    LEFT JOIN ratings
    ON stores.id = ratings.store_id
    WHERE 1=1
  `;

  const values = [userId];

  if (name) {
    sql += " AND stores.name LIKE ?";
    values.push(`%${name}%`);
  }

  if (address) {
    sql += " AND stores.address LIKE ?";
    values.push(`%${address}%`);
  }

  sql += " GROUP BY stores.id";

  if (sort) {
    const allowedSort = ["name", "address"];

    if (allowedSort.includes(sort)) {
      sql += ` ORDER BY stores.${sort} ASC`;
    }
  }

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

const submitRating = (req, res) => {
  const { store_id, rating } = req.body;
  const user_id = req.user.id;

  const checkQuery =
    "SELECT * FROM ratings WHERE user_id = ? AND store_id = ?";

  db.query(checkQuery, [user_id, store_id], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length > 0) {
      return res.status(400).json({
        message: "You already rated this store",
      });
    }

    const insertQuery =
      "INSERT INTO ratings (user_id, store_id, rating) VALUES (?, ?, ?)";

    db.query(insertQuery, [user_id, store_id, rating], (err) => {
      if (err) return res.status(500).json(err);

      res.status(201).json({
        message: "Rating Submitted Successfully",
      });
    });
  });
};

const updateRating = (req, res) => {
  const { store_id, rating } = req.body;

  const user_id = req.user.id;

  const sql =
    "UPDATE ratings SET rating = ? WHERE user_id = ? AND store_id = ?";

  db.query(sql, [rating, user_id, store_id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Rating Updated Successfully",
    });
  });
};

module.exports = {
  getAllStores,
  submitRating,
  updateRating,
};