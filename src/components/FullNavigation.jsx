import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
var classNames = require("classnames");

class FullNavigation extends React.Component {
  render() {
    return (
      <div className="menu-frame">
        <div className="menu-frame-inner">
          <a href="#" className="style-link">
            style
          </a>
          <a href="#" className="press-link">
            press
          </a>
          <a href="#" className="team-link">
            team
          </a>
          <a href="#" className="clients-link">
            clients
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(FullNavigation);
