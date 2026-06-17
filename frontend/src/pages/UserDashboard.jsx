import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function UserDashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "25px" }}>
          <h1
            style={{
              marginBottom: "10px",
            }}
          >
            User Dashboard
          </h1>

          <p
            style={{
              color: "#64748b",
              marginBottom: "30px",
            }}
          >
            Welcome to the Store Rating Platform.
            Browse stores, submit ratings and help
            improve the quality of store reviews.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "20px",
            }}
          >
            <div className="card">
              <h3>Store Discovery</h3>

              <p>
                Access all registered stores and
                view their addresses and overall
                ratings before making decisions.
              </p>
            </div>

            <div className="card">
              <h3>Rating Management</h3>

              <p>
                Submit ratings between 1 and 5
                stars and update them whenever
                your experience changes.
              </p>
            </div>

            <div className="card">
              <h3>Store Search</h3>

              <p>
                Search stores quickly using store
                name or address to find relevant
                businesses.
              </p>
            </div>
          </div>

          <br />

          <div className="card">
            <h3>User Features</h3>

            <ul>
              <li>
                View all registered stores.
              </li>

              <li>
                Search stores by name and address.
              </li>

              <li>
                Submit ratings from 1 to 5.
              </li>

              <li>
                Modify previously submitted
                ratings.
              </li>

              <li>
                Change account password securely.
              </li>

              <li>
                Manage account access using a
                protected login system.
              </li>
            </ul>
          </div>

          <br />

          <div className="card">
            <h3>Platform Overview</h3>

            <p>
              This platform enables users to
              evaluate stores through a structured
              rating system. Ratings submitted by
              registered users contribute to the
              overall store rating, helping other
              users make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;