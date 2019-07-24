import React from "react";
import Header from "./components/Header";

class App extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
