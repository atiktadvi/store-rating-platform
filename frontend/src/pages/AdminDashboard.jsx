import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AdminDashboard() {
  const [data, setData] = useState({
    totalUsers: 0,
    totalStores: 0,
    totalRatings: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await API.get(
        "/admin/dashboard"
      );

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h2>Admin Dashboard</h2>

          <br />

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            <div className="card">
              <h3>Total Users</h3>
              <h1>{data.totalUsers}</h1>
            </div>

            <div className="card">
              <h3>Total Stores</h3>
              <h1>{data.totalStores}</h1>
            </div>

            <div className="card">
              <h3>Total Ratings</h3>
              <h1>{data.totalRatings}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;