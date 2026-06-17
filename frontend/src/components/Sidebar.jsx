import { Link } from "react-router-dom";

function Sidebar() {
  const role = localStorage.getItem("role");

  const linkStyle = {
    color: "white",
    display: "block",
    marginBottom: "15px",
    textDecoration: "none",
  };

  return (
    <div
      style={{
        width: "240px",
        minHeight: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Store Rating</h2>

      <br />

      {role === "admin" && (
        <>
          <Link to="/admin" style={linkStyle}>
            Dashboard
          </Link>

          <Link to="/users" style={linkStyle}>
            Users
          </Link>

          <Link to="/stores" style={linkStyle}>
            Stores
          </Link>

          <Link to="/add-user" style={linkStyle}>
            Add User
          </Link>

          <Link to="/add-store" style={linkStyle}>
            Add Store
          </Link>

          <Link to="/change-password" style={linkStyle}>
            Change Password
          </Link>
        </>
      )}

      {role === "owner" && (
        <>
          <Link to="/owner" style={linkStyle}>
            Owner Dashboard
          </Link>

          <Link to="/change-password" style={linkStyle}>
            Change Password
          </Link>
        </>
      )}

      {role === "user" && (
        <>
          <Link to="/dashboard" style={linkStyle}>
            Dashboard
          </Link>

          <Link to="/stores" style={linkStyle}>
            Stores
          </Link>

          <Link to="/change-password" style={linkStyle}>
            Change Password
          </Link>
        </>
      )}
    </div>
  );
}

export default Sidebar;