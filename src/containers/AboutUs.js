import React from "react";
import { Link } from "react-router-dom";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Link className="logo-container" to="/">
          <h3 className="description-language">
            wildflower is a do-good public relations firm for the eco-friendly,
            conscientious and courageous.
          </h3>{" "}
          <br />
          <h3 className="description-language">
            🗽Brooklyn-based + bilingüe bebé✌🏼{" "}
          </h3>{" "}
          <br />
          <h3 className="description-language">
            🌾We bloom among the wild✨{" "}
          </h3>{" "}
          <br />
          <h3 className="description-language">EST. 2015</h3>
        </Link>
      </div>
    );
  }
}

export default AboutUs;
