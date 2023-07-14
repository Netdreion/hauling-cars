import { useState } from "react";
import data from "../Data";
import "../App.css";

const HomePage = () => {
  const [locations, setLocations] = useState(data);
  const [locationList, setLocationList] = useState([]);

  const handleClick = (offer) => {
    const offerValue = offer.target.value;
    const selectedLocation = locations.find(
      (location) => location.offer === offerValue
    );

    if (selectedLocation) {
      setLocationList((prevList) => [...prevList, selectedLocation]);
    }
  };

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
                <td>{location.id}</td>
                <td>{location.distance} miles</td>
                <td>
                  <button value={location.offer} onClick={handleClick}>
                    {location.offer}$
                  </button>
                </td>
                <td>{location.distance / location.offer}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <ul>
            {locationList.map((location) => (
              <li key={location.id}>
                {location.id} - {location.distance} miles - {location.offer}$
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
