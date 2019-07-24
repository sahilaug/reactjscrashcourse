import React, { Component } from "react";

class Header extends Component {
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

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: this.state.theme === "dark" ? "black" : "white",
            color: this.state.theme === "dark" ? "white" : "black",
            height: "60px",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div>
            <button onClick={this.toggleTheme}>{this.state.theme}</button>
          </div>
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
