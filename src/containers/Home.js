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
          style={{ backgroundImage: "url(" + Background + ")" }}
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
            Who we are
            <br />
            wildflower is a petite public relations firm for the eco-friendly,
            conscientious & courageous. 🗽Brooklyn-based + bilingüe bebé✌🏼 🌾we
            bloom among the wild✨ EST.2015
          </h3>
        </div>
        <div
          className="logo-container"
          to="/about-us"
          style={{ backgroundImage: "url(" + yellow_fuzz + ")" }}
        >
          <h3 className="description-language" style={{ color: "#c5a1c9" }}>
            What we believe in
            <br />
            We're a team of independent, creative collaborators. We abide by
            mindful storytelling. In doing less to achieve more. And, in living
            a life that's full of intention. We get things done and promise to
            enjoy the ride from creation to fruition. We bloom among the wild
          </h3>
        </div>
        <div
          className="logo-container"
          to="/about-us"
          style={{ backgroundImage: "url(" + purple_fuzz + ")" }}
        >
          <h3 className="description-language" style={{ color: "#8adbc5" }}>
            Who we work with <br />
            Agents of change.
            <br />
            Lightworkers elevating the collective consciousness.
            <br />
            Entrepreneurs wearing their hearts on their sleeves.
            <br />
            Doers making the world a cleaner and safer place.
            <br />
            Activists influencing public policy for the better.
            <br />
            Fortune 500s targeting the millennial generation and multicultural
            communities.
            <br />
            Companies working to help women achieve their goals.
            <br />
            Mission-driven dreamers, kinder humans, and beautiful makers:
            <br />
            They are our inspiration. <br />
          </h3>
        </div>
      </div>
    );
  }
}

export default Home;
