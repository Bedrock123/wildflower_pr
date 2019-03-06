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
                media in english, as well as, multicultural outlets in spanish
                too: inclusive of print, online, tv, radio and influencers.
              </p>
            </div>

            <div className="content-block">
              <img src={copyright} alt="Media" />
              <p className="content-title">COPYWRITING</p>
              <p className="content-paragraph">
                we work with you to develop the right brand strategy for the era
                that we live in. we can also create or rebrand your look and
                feel to take you to that higher level.
              </p>
            </div>
            <div className="content-block">
              <img src={partnerships} alt="Media" />
              <p className="content-title">PARTNERSHIPS & COLLOABORATIONS</p>
              <p className="content-paragraph">
                from wellness to technology to politics to fortune 500s, we've
                built relationships that span almost every market. we'll
                showcase your brand to stakeholders and influencers to achieve
                maximum impact.
              </p>
            </div>
            <div className="content-block">
              <img src={events} alt="Media" />
              <p className="content-title">
                EVENTS & EXPERIENTIAL ACTIVATIONS{" "}
              </p>
              <p className="content-paragraph">
                from a speaking gig on a panel to hosting your own pop-up event,
                our team will help with the logistics and strategy to maximize
                your presence and results.
              </p>
            </div>
          </div>
        </div>
        <div className="style-container direction-container">
          <div className="content-container">
            <div className="content-header">
              <p>WHAT WE ARE ALL ABOUT</p>
            </div>
            <div className="content-block">
              <p className="content-paragraph">
                ✨we believe that all things are possible, even when they appear
                to be at odds. life is not static and neither are our needs —
                they vary across a lifetime and across each situation. through
                listening and awareness, the universe reveals itself to you/us.
                we know that if we can put our perceptions and impatience aside,
                we can create space, realizing that it’s not as complicated as
                we make it out to be. we abide by qualities of awe and trust
                with a continual sense and reverence towards the mystery of
                life. we work to keep a healthy mind because a healthy mind is a
                healthy life.✨
                <br />
                <br />
                this is our culture. <br />
                this is our ethos. <br />
                this is our human residence.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
