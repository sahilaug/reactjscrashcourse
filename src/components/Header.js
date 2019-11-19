import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../App";

const Header = ({ headerText, toggleTheme, curTheme }) => {
  return (
    <React.Fragment>
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
                className={`p10 font-${value.theme}`}
                activeClassName="active-link"
              >
                Home
                </NavLink>
              <NavLink
                to="/favourites"
                className={`p10 font-${value.theme}`}
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
              {headerText}
            </div>
            <div>
              <button
                onClick={toggleTheme}
                style={{ textTransform: "capitalize" }}
              >
                {curTheme}
              </button>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  );
}

export default Header;
