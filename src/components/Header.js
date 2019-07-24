import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink
              to="/"
              exact
              className="App-link"
              activeClassName="active-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/favourites"
              className="App-link"
              activeClassName="active-link"
            >
              Favourites
            </NavLink>
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
