import React from "react";
import { Link } from "react-router-dom";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Link className="logo-container" to="/">
          <h3 className="description-language">
            Wildflower is a petite public relations firm for the eco-friendly,
            conscientious. Proudly based in Brooklyn. En espanol tambien. We
            thrive among the wild.
          </h3>
        </Link>
      </div>
    );
  }
}

export default AboutUs;
