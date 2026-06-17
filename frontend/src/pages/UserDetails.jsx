import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await API.get(
        `/admin/users/${id}`
      );

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h2>User Details</h2>

          <div className="card">
            <p>
              <strong>Name:</strong>{" "}
              {user.name}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {user.email}
            </p>

            <p>
              <strong>Address:</strong>{" "}
              {user.address}
            </p>

            {user.role === "owner" && (
  <p>
    <strong>Store Rating:</strong>{" "}
    {user.average_rating ?? "No Ratings"}
  </p>
)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;