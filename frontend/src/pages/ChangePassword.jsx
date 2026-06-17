import { useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function ChangePassword() {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
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
      const res = await API.put(
        "/auth/change-password",
        {
          oldPassword: form.oldPassword,
          newPassword: form.newPassword,
        }
      );

      alert(res.data.message);

      setForm({
        oldPassword: "",
        newPassword: "",
      });
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to update password"
      );
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h2>Change Password</h2>

          <br />

          <form
            onSubmit={handleSubmit}
            className="card"
            style={{
              maxWidth: "500px",
            }}
          >
            <input
              type="password"
              name="oldPassword"
              placeholder="Old Password"
              value={form.oldPassword}
              onChange={handleChange}
              required
            />

            <br />
            <br />

            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={form.newPassword}
              onChange={handleChange}
              required
            />

            <br />
            <br />

            <button
              type="submit"
              className="btn"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;