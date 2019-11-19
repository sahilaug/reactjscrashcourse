import React from "react";
import Card from "./Card";
import useTheme from '../hooks/useTheme';

const Home = ({ data, toggleLike }) => {
  const [theme, toggleTheme] = useTheme();
  return (
    <div className="p20 card-container">
      <button
        onClick={toggleTheme}
        style={{ textTransform: "capitalize", backgroundColor: theme === 'light' ? '#fff' : '#rgb(5.6%, 13.6%, 5.6%)' }}
      >
        {theme}
      </button>
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
