import React from "react";
import logo from "../assets/images/logo.gif";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Link className="logo-container" to="/about-us">
          <img src={logo} alt="Wild Flower" className="center-logo" />
          <p className="home-pagep-title">Public Relations</p>
        </Link>
      </div>
    );
  }
}

export default Home;
