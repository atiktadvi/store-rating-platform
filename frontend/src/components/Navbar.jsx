import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const role =
    localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();

    navigate("/");
  };

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent:
          "space-between",
      }}
    >
      <h3>Store Rating Platform</h3>

      <div>
        {role}

        <button
          className="btn"
          style={{
            marginLeft: "15px",
          }}
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;