import React from "react";
import { Row, Col } from "antd";
import media_relations from "../assets/images/media.png";

class Home extends React.Component {
  render() {
    return (
      <div className="style-wrapper">
        <div className="style-container direction-container">
          <div className="content-container">
            <div className="content-header">
              <p>WHAT WE DO</p>
            </div>
            <div className="content-block">
              <img src={media_relations} alt="Media" />
              <p className="content-title">STRATEGIC COMMUNICATION</p>
              <p className="content-paragraph">
                We jump in to modernize your communications strategy through
                innovation and creativity. We look at the key elements of a
                traditional communications strategy and pump it up to achieve a
                fresher approach.
              </p>
            </div>
            <div className="content-block">
              <img src={media_relations} alt="Media" />
              <p className="content-title">MEDIA RELATIONS</p>
              <p className="content-paragraph">
                We'll pitch you to top-tier media outlets, planting a seed of
                your brand and vision, in a uniquely impactful way that
                generates buzz. This includes media in English and multicultural
                outlets in Spanish too. Print, online, TV and radio. Influencers
                too!
              </p>
            </div>

            <div className="content-block">
              <img src={media_relations} alt="Media" />
              <p className="content-title">COPYWRITING</p>
              <p className="content-paragraph">
                We work with you to develop the right brand strategy for the era
                we live in. We also create or rebrand your business and personal
                look, feel and tone to take you to that higher level.
              </p>
            </div>
            <div className="content-block">
              <img src={media_relations} alt="Media" />
              <p className="content-title">PARTNERSHIPS & COLLOABORATIONS</p>
              <p className="content-paragraph">
                From wellness to technology to politics to Fortune 500s, we've
                built relationships that span almost every market. We'll
                showcase your brand to stakeholders that can help you achieve
                maximum impact.
              </p>
            </div>
            <div className="content-block">
              <img src={media_relations} alt="Media" />
              <p className="content-title">
                EVENTS & EXPERIENTIAL ACTIVATIONS{" "}
              </p>
              <p className="content-paragraph">
                From a speaking gig on a panel to hosting your own event, our
                team will help with the logistics and strategy to maximize your
                presence and results. We can create pop-up events too!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
