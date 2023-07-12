import { useState } from "react";
import data from "../Data";
import "../App.css";
const HomePage = () => {
  const [locations, setLocations] = useState(data);

  locations.forEach((location) => {
    location.distanceToOfferRatio = location.distance / location.offer;
  });

  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Distance</th>
              <th>Offer</th>
              <th>Ratio</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id}>
                <button>
                  <td>{location.distance} miles</td>
                  <td>{location.offer}$</td>
                </button>
              </tr>
            ))}
          </tbody>
        </table>
        <input type="text" />
      </div>
    </div>
  );
};

export default HomePage;
