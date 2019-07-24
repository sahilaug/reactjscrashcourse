import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
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
