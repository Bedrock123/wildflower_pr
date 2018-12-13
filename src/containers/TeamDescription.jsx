import React from "react";
import { Link } from "react-router-dom";

class TeamDescription extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Link className="logo-container" to="/team">
          <h3 className="description-language" style={{ color: "#c5a1c9" }}>
            We're a team of independent, creative collaborators. We abide by
            mindful storytelling. In doing less to achieve more. And, in living
            a life that's full of intention. We get things done and promise to
            enjoy the ride from creation to fruition. We bloom among the wild
          </h3>
        </Link>
      </div>
    );
  }
}

export default TeamDescription;
