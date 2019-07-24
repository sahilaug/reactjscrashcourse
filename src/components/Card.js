import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ cardData }) => {
  return (
    <div
      key={cardData.show.id}
      style={{
        width: "40%",
        border: "1px solid black",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <img
        style={{ height: "200px", width: "200px", alignSelf: "center" }}
        alt={cardData.show.image ? cardData.show.image.medium : "thumbnail"}
        src={
          cardData.show.image
            ? cardData.show.image.medium
            : "https://www.blackbeltkaratestudio.com/wp-content/uploads/2017/04/default-image-200x200.jpg"
        }
      />
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h1>{cardData.show.name}</h1>
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
};

export default Card;
