import React from "react";
import { Link } from "react-router-dom";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Link className="logo-container" to="/">
          <h3 className="description-language">
            wildflower is a petite public relations firm for the eco-friendly,
            conscientious & courageous. 🗽Brooklyn-based + bilingüe bebé✌🏼 🌾we
            bloom among the wild✨ EST.2015
          </h3>
        </Link>
      </div>
    );
  }
}

export default AboutUs;
