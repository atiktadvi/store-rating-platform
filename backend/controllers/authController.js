const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { name, email, address, password } = req.body;

      const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid Email Format",
      });
    }

    if (name.length < 20 || name.length > 60) {
  return res.status(400).json({
    message:
      "Name must be between 20 and 60 characters",
  });
}

    const passwordRegex =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be 8-16 characters with 1 uppercase and 1 special character",
      });
    }


    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) {
          return res.status(500).json(err);
        }

        if (result.length > 0) {
          return res.status(400).json({
            message: "Email already exists",
          });
        }

        const hashedPassword = await bcrypt.hash(
          password,
          10
        );

        const sql =
          "INSERT INTO users (name, email, password, address, role) VALUES (?, ?, ?, ?, ?)";

        db.query(
          sql,
          [
            name,
            email,
            hashedPassword,
            address,
            "user",
          ],
          (err) => {
            if (err) {
              return res.status(500).json(err);
            }

            res.status(201).json({
              message:
                "User Registered Successfully",
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      "mysecretkey123",
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      role: user.role,
    });
  });
};

const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const userId = req.user.id;

  db.query(
    "SELECT * FROM users WHERE id = ?",
    [userId],
    async (err, result) => {
      if (err) return res.status(500).json(err);

      const user = result[0];

      const isMatch = await bcrypt.compare(
        oldPassword,
        user.password
      );

      if (!isMatch) {
        return res.status(400).json({
          message: "Old Password Incorrect",
        });
      }

      const hashedPassword = await bcrypt.hash(
        newPassword,
        10
      );

      db.query(
        "UPDATE users SET password = ? WHERE id = ?",
        [hashedPassword, userId],
        (err) => {
          if (err) return res.status(500).json(err);

          res.json({
            message: "Password Updated Successfully",
          });
        }
      );
    }
  );
};

module.exports = {
  signup,
  login,
  changePassword,
};