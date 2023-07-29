import { useState } from "react";
import data from "../Data";
import "../App.css";

const HomePage = () => {
  const [locations, setLocations] = useState(data);
  const [locationList, setLocationList] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClick = (location) => {
    const pickedLocation = [...locationList, location];

    setLocationList(pickedLocation);
    totalOffer();
  };

  const totalOffer = () => {
    let totalMoney = 0;
    locationList.forEach((item) => {
      totalMoney += item.offer;
    });
    setTotal(totalMoney);
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
                  <button
                    value={location.offer}
                    onClick={() => handleClick(location)}
                  >
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
            {locationList.map((location, index) => (
              <li key={index}>
                {location.id} - {location.offer}${location.distance} miles
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>{total}</div>
    </div>
  );
};

export default HomePage;
