const db = require("../config/db");
const bcrypt = require("bcryptjs");

const getDashboard = (req, res) => {
  const dashboardData = {};

  db.query("SELECT COUNT(*) AS totalUsers FROM users", (err, users) => {
    if (err) return res.status(500).json(err);

    dashboardData.totalUsers = users[0].totalUsers;

    db.query("SELECT COUNT(*) AS totalStores FROM stores", (err, stores) => {
      if (err) return res.status(500).json(err);

      dashboardData.totalStores = stores[0].totalStores;

      db.query(
        "SELECT COUNT(*) AS totalRatings FROM ratings",
        (err, ratings) => {
          if (err) return res.status(500).json(err);

          dashboardData.totalRatings = ratings[0].totalRatings;

          res.json(dashboardData);
        }
      );
    });
  });
};

const addStore = (req, res) => {
  const { name, email, address, owner_id } = req.body;

  const sql =
    "INSERT INTO stores (name, email, address, owner_id) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, address, owner_id], (err) => {
    if (err) return res.status(500).json(err);

    res.status(201).json({
      message: "Store Added Successfully",
    });
  });
};

const getAllUsers = (req, res) => {
  const { name, email, address, role, sort } = req.query;

  let sql =
    "SELECT id, name, email, address, role FROM users WHERE 1=1";

  const values = [];

  if (name) {
    sql += " AND name LIKE ?";
    values.push(`%${name}%`);
  }

  if (email) {
    sql += " AND email LIKE ?";
    values.push(`%${email}%`);
  }

  if (address) {
    sql += " AND address LIKE ?";
    values.push(`%${address}%`);
  }

  if (role) {
    sql += " AND role = ?";
    values.push(role);
  }

  if (sort) {
    const allowedFields = ["name", "email", "address", "role"];

    if (allowedFields.includes(sort)) {
      sql += ` ORDER BY ${sort} ASC`;
    }
  }

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

const addUser = async (req, res) => {
  const { name, email, password, address, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql =
    "INSERT INTO users (name,email,password,address,role) VALUES (?,?,?,?,?)";

  db.query(
    sql,
    [name, email, hashedPassword, address, role],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "User Added Successfully",
      });
    }
  );
};


const getUserById = (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT
      users.id,
      users.name,
      users.email,
      users.address,
      users.role,
      ROUND(AVG(ratings.rating),1) AS average_rating
    FROM users
    LEFT JOIN stores
      ON users.id = stores.owner_id
    LEFT JOIN ratings
      ON stores.id = ratings.store_id
    WHERE users.id = ?
    GROUP BY users.id
  `;

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(result[0]);
  });
};

module.exports = {
  getDashboard,
  addStore,
  getAllUsers,
  addUser,
  getUserById,
};