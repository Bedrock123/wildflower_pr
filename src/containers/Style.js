import React from "react";
import { Row, Col } from "antd";
import couch_photo from "../assets/images/couch.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="style-wrapper">
        <div className="style-container">
          <div className="content-container">
            <div className="content-header">
              <p>WHAT WE DO</p>
            </div>
            <div className="content-block">
              <div className="content-icon" />
              <p className="content-title">STRATEGIC COMMUNICATION</p>
              <p className="content-paragraph">
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Maecenas faucibus mollis interdum.
              </p>
            </div>
            <div className="content-block">
              <div className="content-icon" />
              <p className="content-title">MEDIA RELATIONS</p>
              <p className="content-paragraph">
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Maecenas faucibus mollis interdum.
              </p>
            </div>
            <div className="content-block">
              <div className="content-icon" />
              <p className="content-title">PARTNERSHIPS & COLLOABORATIONS</p>
              <p className="content-paragraph">
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Maecenas faucibus mollis interdum.
              </p>
            </div>
            <div className="content-block">
              <div className="content-icon" />
              <p className="content-title">COPYWRITING</p>
              <p className="content-paragraph">
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Maecenas faucibus mollis interdum.
              </p>
            </div>
            <div className="content-block">
              <div className="content-icon" />
              <p className="content-title">EVENTS</p>
              <p className="content-paragraph">
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Maecenas faucibus mollis interdum.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
