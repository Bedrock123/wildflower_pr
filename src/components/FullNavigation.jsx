import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
var classNames = require("classnames");

class FullNavigation extends React.Component {
  render() {
    return (
      <div className="menu-frame">
        <div className="menu-frame-inner">
          <a href="#">
            <img src={logo} alt="Wildflower PR Logo" className="menu-logo" />
          </a>
          <a href="#" className="four-corner-link style-link">
            style
          </a>
          <a href="#" className="four-corner-link press-link">
            press
          </a>
          <a href="#" className="four-corner-link team-link">
            team
          </a>
          <a href="#" className="four-corner-link clients-link">
            clients
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(FullNavigation);
