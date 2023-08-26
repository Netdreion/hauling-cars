import React, { useState } from "react"; // Import React and useState
import data from "../Data";
import "../App.css";

const HomePage = () => {
  const [locations, setLocations] = useState(data);
  const [locationList, setLocationList] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClick = (location) => {
    const pickedLocation = [...locationList, location];

    if (pickedLocation.length <= 3) {
      // Corrected the typo "lenght" to "length"
      setLocationList(pickedLocation);
    } else {
      setLocations([]); // Change "null" to an empty array
    }

    totalOffer(pickedLocation);
  };

  const totalOffer = (pickedLocation) => {
    let totalMoney = 0;

    for (let i = 0; i < pickedLocation.length; i++) {
      totalMoney += pickedLocation[i].offer;
    }

    if (pickedLocation.length > 3) {
      setTotal("Total location limit reached");
    } else {
      setTotal(totalMoney);
    }
  };

  const startOver = () => {
    setLocationList([]);
    setTotal(0);
  };

  return (
    <div>
      {/* ... */}
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
          {data.map(
            (
              location // Fixed the parentheses
            ) => (
              <tr key={location.id}>
                <td>{location.id}</td>
                <td>{location.distance} miles</td>
                <td>
                  <button
                    value={location.offer}
                    onClick={() => handleClick(location)}
                  >
                    {location.offer}$
                  </button>
                </td>
                <td>{location.distance / location.offer}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      {/* ... */}
    </div>
  );
};

export default HomePage;
