import { useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AddStore() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    owner_id: "",
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
        "/admin/add-store",
        form
      );

      alert("Store Added");

      setForm({
        name: "",
        email: "",
        address: "",
        owner_id: "",
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
          <h2>Add Store</h2>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Store Name"
              value={form.name}
              onChange={handleChange}
            />

            <br /><br />

            <input
              name="email"
              placeholder="Store Email"
              value={form.email}
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

            <input
              name="owner_id"
              placeholder="Owner ID"
              value={form.owner_id}
              onChange={handleChange}
            />

            <br /><br />

            <button
              className="btn"
              type="submit"
            >
              Add Store
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStore;