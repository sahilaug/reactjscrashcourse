import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: this.props.curTheme === "dark" ? "black" : "white",
            color: this.props.curTheme === "dark" ? "white" : "black",
            height: "60px",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div>
            <Link to="/" className="App-link">
              Home
            </Link>
            <Link to="/favourites" className="App-link">
              Favourites
            </Link>
          </div>

          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold"
            }}
          >
            {this.props.headerText}
          </div>
          <div>
            <button
              onClick={this.props.toggleTheme}
              style={{ textTransform: "capitalize" }}
            >
              {this.props.curTheme}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
