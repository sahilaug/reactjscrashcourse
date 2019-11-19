import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import useTheme from './hooks/useTheme';
import "./App.css";
const BASE_URL =
  "https://api.tvmaze.com/search/shows?q=breaking%20bad&embed=episodes";
export const ThemeContext = React.createContext({ theme: "dark" });

const App = () => {
  const [data, setData] = useState([]);
  const [theme, toggleTheme] = useTheme();

  const toggleLike = id => {
    const newData = data.map(d => {
      let returnObj;
      if (d.show.id === id) {
        returnObj = d.isLiked
          ? { ...d, isLiked: false }
          : { ...d, isLiked: true };
      } else {
        returnObj = d;
      }
      return returnObj;
    });
    setData(newData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const responsePromise = await fetch(BASE_URL);
      const data = await responsePromise.json();
      setData(data);
    }
    fetchData();
  }, [])

  return (
    <Router>
      <ThemeContext.Provider value={{ theme: theme }}>
        <Header
          headerText="Header"
          curTheme={theme}
          toggleTheme={toggleTheme}
        />
        <Route
          path="/"
          exact
          component={() => (
            <Home data={data} toggleLike={toggleLike} />
          )}
        />
        <Route
          path="/favourites"
          component={() => <Favourites data={data} />}
        />
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
