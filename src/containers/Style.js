import React from "react";
import { Row, Col } from "antd";
import media_relations from "../assets/images/media.png";

import copyright from "../assets/images/style/copyright.jpg";
import events from "../assets/images/style/events.jpg";
import partnerships from "../assets/images/style/partnerships.jpg";
import strategic_communication from "../assets/images/style/strategic_communication.jpg";

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
              <img src={strategic_communication} alt="Media" />
              <p className="content-title">STRATEGIC COMMUNICATIONS</p>
              <p className="content-paragraph">
                we're here to help you tell your story through innovation and
                creativity. we look at the key elements of a traditional
                communications strategy and reboot it to achieve a tip-top
                approach.
              </p>
            </div>
            <div className="content-block">
              <img src={media_relations} alt="Media" />
              <p className="content-title">MEDIA RELATIONS</p>
              <p className="content-paragraph">
                we love to pitch the media, it's our bread and butter. we get to
                plant a seed on your behalf about your brand and vision in a way
                that they'll remember. this includes mainstream general market
                media in english, as well as, multicultural outlets in spanish,
                too: inclusive of print, online, tv, radio and influencers.
              </p>
            </div>

            <div className="content-block">
              <img src={partnerships} alt="Media" />
              <p className="content-title">PARTNERSHIPS & COLLOABORATIONS</p>
              <p className="content-paragraph">
                from wellness to technology to politics to fortune 500s, we've
                built relationships that span almost every market. we'll
                showcase your brand to stakeholders and advocates to achieve
                impact.
              </p>
            </div>
            <div className="content-block">
              <img src={events} alt="Media" />
              <p className="content-title">THOUGHT LEADERSHIP</p>
              <p className="content-paragraph">
                from speaking gigs to award submissions, our team will help with
                the roadmap to elevate your presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
