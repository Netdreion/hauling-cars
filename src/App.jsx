import { useState } from "react";
import HomePage from "./components/home";
import BestChoice from "./components/BestChoice";
import data from "./Data";

function App() {
  // Sort offers in descending order based on offer amount
  const sortedData = data.sort((a, b) => b.offer - a.offer);

  // Get the offer with the highest amount (first one after sorting)
  const bestOffer = sortedData[0];

  return (
    <>
      <HomePage />

      <BestChoice
        key={bestOffer.id}
        id={bestOffer.id}
        distance={bestOffer.distance}
        offer={bestOffer.offer}
      />
    </>
  );
}

export default App;
