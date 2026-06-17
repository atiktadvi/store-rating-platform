import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function OwnerDashboard() {
  const [stores, setStores] = useState([]);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetchDashboard();
    fetchRatings();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await API.get("/owner/dashboard");
      setStores(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRatings = async () => {
    try {
      const res = await API.get("/owner/ratings");
      setRatings(res.data);
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
          <h2>Owner Dashboard</h2>

          <br />

          <h3>Store Rating Summary</h3>

          <table className="card">
            <thead>
              <tr>
                <th>Store Name</th>
                <th>Average Rating</th>
              </tr>
            </thead>

            <tbody>
              {stores.map((store) => (
                <tr key={store.id}>
                  <td>{store.name}</td>
                  <td>{store.average_rating}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <br />
          <br />

          <h3>Users Who Submitted Ratings</h3>

          <table className="card">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Store</th>
                <th>Rating</th>
              </tr>
            </thead>

            <tbody>
              {ratings.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.store_name}</td>
                  <td>{item.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboard;