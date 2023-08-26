import { useState } from "react";
import HomePage from "./components/home";
import BestChoice from "./components/BestChoice";
import data from "./Data";

function App() {
  return (
    <>
      <HomePage />
      {data.map((offer) => {
        return (
          <BestChoice
            key={offer.id}
            id={offer.id}
            distance={offer.distance}
            offer={offer.offer}
          ></BestChoice>
        );
      })}
    </>
  );
}

export default App;
