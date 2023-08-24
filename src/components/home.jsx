import { useEffect, useState } from "react";
import data from "../Data";
import "../App.css";

const HomePage = () => {
  const [locations, setLocations] = useState(data);
  const [locationList, setLocationList] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClick = (location) => {
    const pickedLocation = [...locationList, location];

    setLocationList(pickedLocation);

    if (pickedLocation.lenght <= 3) {
      setLocationList(pickedLocation);
    } else {
      setLocations(null);
    }

    totalOffer(pickedLocation);
  };
  const totalOffer = (pickedLocation) => {
    let totalMoney = 0;

    for (let i = 0; i < pickedLocation.length; i++) {
      totalMoney += pickedLocation[i].offer;
    }
    if (pickedLocation.length > 3) {
      return (
        <div>
          {" "}
          <p>total location reached</p>
        </div>
      );
    }

    setTotal(totalMoney);
  };

  const startOver = () => {
    setLocationList([]);
    setTotal(0);
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
            {data.map((location) => (
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
        <div className="subTable">
          <table>
            <tr>
              {data.map((data) => {
                const { id, distance, offer } = data;
                return <th key={id}> </th>;
              })}
            </tr>
          </table>
          {locationList.length <= 3 ? (
            <ul>
              {locationList.map((location, index) => (
                <li key={index} className="bag">
                  {location.id} - {location.offer}-${location.distance} miles
                </li>
              ))}
            </ul>
          ) : (
            "please add"
          )}
        </div>
      </div>
      <div>{total}$</div>
      <button onClick={() => startOver()}>
        {" "}
        {total != 0 ? "Start Over" : ""}
      </button>
    </div>
  );
};

export default HomePage;
