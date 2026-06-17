import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Stores() {
  const [stores, setStores] = useState([]);
  const [rating, setRating] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const res = await API.get("/stores");
      setStores(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitRating = async (storeId) => {
    try {
      await API.post("/stores/rating", {
        store_id: storeId,
        rating: Number(rating[storeId]),
      });

      alert("Rating Submitted");
      fetchStores();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Error submitting rating"
      );
    }
  };

  const updateRating = async (storeId) => {
    try {
      await API.put("/stores/rating", {
        store_id: storeId,
        rating: Number(rating[storeId]),
      });

      alert("Rating Updated");
      fetchStores();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Error updating rating"
      );
    }
  };

  const filteredStores = stores.filter(
    (store) =>
      store.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      store.address
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h2>Stores</h2>

          <br />

          <input
            type="text"
            placeholder="Search by Store Name or Address"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            style={{
              width: "100%",
              maxWidth: "400px",
              marginBottom: "20px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(300px,1fr))",
              gap: "20px",
            }}
          >
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className="card"
              >
                <h3>{store.name}</h3>

                <p>
                  <strong>Address:</strong>{" "}
                  {store.address}
                </p>

                <p>
                  <strong>Overall Rating:</strong>{" "}
                  {store.overall_rating}
                </p>

                <p>
                  <strong>Your Rating:</strong>{" "}
                  {store.user_rating ??
                    "Not Rated"}
                </p>

                <br />

                <input
                  type="number"
                  min="1"
                  max="5"
                  placeholder="Rate 1-5"
                  onChange={(e) =>
                    setRating({
                      ...rating,
                      [store.id]:
                        e.target.value,
                    })
                  }
                />

                <br />
                <br />

                <button
                  className="btn"
                  onClick={() =>
                    submitRating(store.id)
                  }
                >
                  Submit Rating
                </button>

                <button
                  className="btn"
                  style={{
                    marginLeft: "10px",
                  }}
                  onClick={() =>
                    updateRating(store.id)
                  }
                >
                  Update Rating
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stores;