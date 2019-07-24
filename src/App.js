import React from "react";
import Header from "./components/Header";

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
      <div>
        <Header
          headerText="Header"
          curTheme={this.state.theme}
          toggleTheme={this.toggleTheme}
        />
      </div>
    );
  }
}

export default App;
