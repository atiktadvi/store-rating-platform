import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
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
      await API.post(
        "/auth/signup",
        form
      );

      alert("Registration Successful");

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
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
          width: "500px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Signup
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="text"
            name="address"
            placeholder="Address"
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
            Register
          </button>
        </form>

        <br />

        <Link to="/">
          Already have an account?
        </Link>
      </div>
    </div>
  );
}

export default Signup;