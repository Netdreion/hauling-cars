import { useState } from "react";
import data from "../Data";

const HomePage = () => {
  const [locations, setLocations] = useState(data);

  locations.forEach((location) => {
    location.distanceToOfferRatio = location.distance / location.offer;
  });

  return (
    <div>
      <form>
        <div>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <button>calculate</button>
      </form>
    </div>
  );
};

export default HomePage;
