import { useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AddUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    role: "user",
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
        "/admin/add-user",
        form
      );

      alert("User Added Successfully");

      setForm({
        name: "",
        email: "",
        password: "",
        address: "",
        role: "user",
      });
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Error"
      );
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h2>Add User</h2>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />

            <br /><br />

            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <br /><br />

            <input
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />

            <br /><br />

            <input
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
            />

            <br /><br />

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
            >
              <option value="user">
                User
              </option>

              <option value="owner">
                Owner
              </option>

              <option value="admin">
                Admin
              </option>
            </select>

            <br /><br />

            <button
              className="btn"
              type="submit"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;