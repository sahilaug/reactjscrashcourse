import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import "./App.css";
const BASE_URL =
  "http://api.tvmaze.com/search/shows?q=breaking%20bad&embed=episodes";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: "dark",
      data: []
    };
  }

  toggleTheme = () => {
    const newTheme = this.state.theme === "dark" ? "light" : "dark";
    this.setState({
      theme: newTheme
    });
  };

  toggleLike = id => {
    const newData = this.state.data.map(d => {
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
    this.setState({ data: newData });
  };

  async componentDidMount() {
    const responsePromise = await fetch(BASE_URL);
    const data = await responsePromise.json();
    this.setState({ data });
  }

  render() {
    return (
      <Router>
        <Header
          headerText="Header"
          curTheme={this.state.theme}
          toggleTheme={this.toggleTheme}
        />
        <Route
          path="/"
          exact
          component={() => (
            <Home data={this.state.data} toggleLike={this.toggleLike} />
          )}
        />
        <Route
          path="/favourites"
          component={() => <Favourites data={this.state.data} />}
        />
      </Router>
    );
  }
}

export default App;
