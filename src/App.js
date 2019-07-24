import React from "react";

class App extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
