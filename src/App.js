import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: "dark"
    };
  }

  toggleTheme = () => {
    const newTheme = this.state.theme === "dark" ? "light" : "dark";
    this.setState({
      theme: newTheme
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      <Router>
        <Header
          headerText="Header"
          curTheme={this.state.theme}
          toggleTheme={this.toggleTheme}
        />
        <Route path="/" exact component={Home} />
        <Route path="/favourites" component={Favourites} />
      </Router>
    );
  }
}

export default App;
