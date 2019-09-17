import React from "react";
import logo from "../assets/images/logo.gif";
import { Link } from "react-router-dom";
import blue_fuzz from "../assets/images/blue_fuz.jpg";

import purple_fuzz from "../assets/images/purple_fuzz.jpg";
import yellow_fuzz from "../assets/images/yellow_fuzz.jpg";
import Background from "../assets/images/background_v1.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <div
          className="logo-container"
          to="/about-us"
          style={{
            backgroundImage: "url(" + Background + ")",
            backgroundSize: "cover"
          }}
        >
          <img src={logo} alt="Wild Flower" className="center-logo" />
          <p className="home-pagep-title">public relations</p>
          <a href="#about-us">
            <i className="fal fa-angle-down scroll-down" />
          </a>
        </div>
        <div
          id="about-us"
          className="logo-container"
          to="/about-us"
          style={{ backgroundImage: "url(" + blue_fuzz + ")" }}
        >
          <h3 className="description-language">
          wldflwr is a do-good public relations firm for the{" "}
          </h3>
          <h3 className="description-language">
            eco-friendly, conscientious and courageous.
          </h3>
          <h3 className="description-language">
            🗽 brooklyn-based + bilingüe bebé ✌🏼
          </h3>
          <h3 className="description-language">
            🌾 we bloom among the wild ✨
          </h3>
          <h3 className="description-language">est. 2015</h3>
          <a href="#team-info">
            <i
              className="fal fa-angle-down scroll-down"
              style={{ color: "#fde392" }}
            />
          </a>
        </div>
        <div
          id="team-info"
          className="logo-container"
          to="/about-us"
          style={{ backgroundImage: "url(" + yellow_fuzz + ")" }}
        >
          <h3 className="description-language " style={{ color: "#b08ad6" }}>
            we work with:{" "}
          </h3>
          <h3 className="description-language " style={{ color: "#b08ad6" }}>
            agents of change • activists • mothers
          </h3>
          <h3 className="description-language " style={{ color: "#b08ad6" }}>
            lightworkers • companies empowering women
          </h3>
          <h3 className="description-language " style={{ color: "#b08ad6" }}>
            fortune 500s targeting millennials + multicultural communities
          </h3>
          <h3 className="description-language " style={{ color: "#b08ad6" }}>
            doers elevating the collective consciousness
          </h3>
          <h3 className="description-language " style={{ color: "#b08ad6" }}>
            making the world a cleaner & safer place
          </h3>
          <h3 className="description-language " style={{ color: "#b08ad6" }}>
            influencing public policy for the better.
          </h3>
          <h3 className="description-language " style={{ color: "#b08ad6" }}>
            they're our inspiration⚡
          </h3>
        </div>
      </div>
    );
  }
}

export default Home;
