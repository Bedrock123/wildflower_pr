import React from "react";
import { Link } from "react-router-dom";

class TeamDescription extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Link className="logo-container" to="/team">
          <h3 className="description-language" style={{ color: "#c5a1c9" }}>
            We're a team of independent, creative collaborators. We believe in
            mindful storytelling and slower living that's jam-packed with more
            intention. We ike to get things done, enjoying the rede from
            creation to fruition.
          </h3>
        </Link>
      </div>
    );
  }
}

export default TeamDescription;
