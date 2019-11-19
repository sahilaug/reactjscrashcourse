import React from "react";
import Card from "./Card";

const Home = ({ data, toggleLike }) => {
  debugger;
  return (
    <div className="p20 card-container">
      {data.length
        ? data.map(d => (
          <Card
            cardData={d}
            toggleLike={toggleLike}
            showLikeButton={true}
          />
        ))
        : null}
    </div>
  );
}

export default Home;
