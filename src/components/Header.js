import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      theme: "dark"
    };
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: this.state.theme === "dark" ? "black" : "white",
            color: this.state.theme === "dark" ? "white" : "black",
            height: "60px",
            padding: "15px"
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold"
            }}
          >
            {this.props.headerText}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
