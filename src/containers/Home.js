import React from "react";
import logo from "../assets/images/logo.gif";
import { Link } from "react-router-dom";
import blue_fuzz from "../assets/images/blue_fuz.png";
import yellow_fuzz from "../assets/images/yellow_fuzz.png";
import purple_fuzz from "../assets/images/purple_fuzz.png";
import Background from "../assets/images/background_v1.png";

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
          <p className="home-pagep-title">Public Relations</p>
        </div>
        <div
          className="logo-container"
          to="/about-us"
          style={{ backgroundImage: "url(" + blue_fuzz + ")" }}
        >
          <h3 className="description-language">
            wildflower is a petite public relations firm for the eco-friendly,
            conscientious and courageous.
          </h3>{" "}
          <h3 className="description-language">
            🗽Brooklyn-based + bilingüe bebé✌🏼{" "}
          </h3>{" "}
          <h3 className="description-language">🌾We bloom among the wild✨ </h3>{" "}
          <h3 className="description-language">EST. 2015</h3>
        </div>

        <div
          className="logo-container"
          to="/about-us"
          style={{ backgroundImage: "url(" + purple_fuzz + ")" }}
        >
          <h3 className="description-language" style={{ color: "#8adbc5" }}>
            What we believe in
          </h3>
          <h3 className="description-language" style={{ color: "#8adbc5" }}>
            We believe that all things are possible, even when they appear to be
            at odds. Life is not static and neither are our needs — they vary
            across a lifetime and across each situation. Through listening and
            awareness, the universe reveals itself to you/us. We know that if we
            can put our perceptions and impatience aside, we can create space
            for alchemy, realizing that it’s not as complicated as we make it
            out to be.{" "}
          </h3>
          <h3 className="description-language" style={{ color: "#8adbc5" }}>
            We abide by qualities of awe and trust with a continual sense and
            reverence towards the mystery of life. We work to keep a healthy
            mind, because a healthy mind equals a healthy body — and life.
          </h3>
          <h3 className="description-language" style={{ color: "#8adbc5" }}>
            This is our culture. This is our ethos. This is our human residence.
          </h3>
        </div>
      </div>
    );
  }
}

export default Home;
