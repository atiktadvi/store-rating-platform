import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/auth/login",
        form
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "role",
        res.data.role
      );

      if (res.data.role === "admin") {
        navigate("/admin");
      } else if (res.data.role === "owner") {
        navigate("/owner");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8fafc",
      }}
    >
      <div
        className="card"
        style={{
          width: "400px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <br />
          <br />

          <button
            className="btn"
            type="submit"
          >
            Login
          </button>
        </form>

        <br />

        <Link to="/signup">
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default Login;