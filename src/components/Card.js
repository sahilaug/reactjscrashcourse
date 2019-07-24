import React from "react";

const Card = ({ cardData }) => {
  return (
    <div
      key={cardData.show.id}
      style={{
        width: "40%",
        border: "1px solid black",
        margin: "20px",
        textAlign: "center"
      }}
    >
      <img
        alt={cardData.show.image ? cardData.show.image.medium : "thumbnail"}
        src={
          cardData.show.image
            ? cardData.show.image.medium
            : "https://www.blackbeltkaratestudio.com/wp-content/uploads/2017/04/default-image-200x200.jpg"
        }
      />
      <h1>{cardData.show.name}</h1>
    </div>
  );
};

export default Card;
