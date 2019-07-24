import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../App";

class Header extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {value => (
            <div
              style={{
                backgroundColor: value.theme === "dark" ? "black" : "white",
                color: value.theme === "dark" ? "white" : "black",
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
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default Header;
