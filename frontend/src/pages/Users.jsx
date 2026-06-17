import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] =
    useState("name");
  const [sortOrder, setSortOrder] =
    useState("asc");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users");

      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchUsers = async () => {
    try {
      const res = await API.get(
        `/admin/users?name=${search}`
      );

      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sortedUsers = [...users].sort(
    (a, b) => {
      const valueA =
        a[sortField]?.toLowerCase() || "";

      const valueB =
        b[sortField]?.toLowerCase() || "";

      if (sortOrder === "asc") {
        return valueA.localeCompare(
          valueB
        );
      }

      return valueB.localeCompare(
        valueA
      );
    }
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h2>Users</h2>

          <br />

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <input
              placeholder="Search User"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            <button
              className="btn"
              onClick={searchUsers}
            >
              Search
            </button>

            <select
              value={sortField}
              onChange={(e) =>
                setSortField(
                  e.target.value
                )
              }
            >
              <option value="name">
                Sort By Name
              </option>

              <option value="email">
                Sort By Email
              </option>

              <option value="role">
                Sort By Role
              </option>
            </select>

            <select
              value={sortOrder}
              onChange={(e) =>
                setSortOrder(
                  e.target.value
                )
              }
            >
              <option value="asc">
                Ascending
              </option>

              <option value="desc">
                Descending
              </option>
            </select>
          </div>

          <br />

          <table className="card">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {sortedUsers.map(
                (user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>

                    <td>{user.email}</td>

                    <td>{user.role}</td>

                    <td>
                      {user.address}
                    </td>

                    <td>
                      <Link
                        to={`/users/${user.id}`}
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;