import React from "react";
import Card from "./Card";

const Favourites = ({ data }) => {
  const filteredData = data.length ? data.filter(d => d.isLiked) : [];
  return filteredData.length ? (
    <div className="p20 card-container">
      {filteredData.map(d => (
        <Card cardData={d} />
      ))}
    </div>
  ) : (
      <h1 className="p20">No favourites</h1>
    );
}

export default Favourites;
