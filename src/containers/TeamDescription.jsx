import React from "react";
import { Link } from "react-router-dom";

class TeamDescription extends React.Component {
  render() {
    return <div className="home-wrapper">
        <Link className="logo-container" to="/team">
          <h3 className="description-language" style={{ color: "#c5a1c9" }}>
            Who we are
          </h3>
          <h3 className="description-language" style={{ color: "#c5a1c9" }}>
            We're a loving team of independent, creative collaborators. We abide by mindful storytelling, doing less to achieve more, and living a life that's full of intention. We get things done and promise to enjoy the ride from beginning to end. What can we say, we bloom among the wild!
          </h3>
        </Link>
      </div>;
  }
}

export default TeamDescription;
