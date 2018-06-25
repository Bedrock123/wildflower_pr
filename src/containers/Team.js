import React from "react";
import { Row, Col } from "antd";
import couch_photo from "../assets/images/couch.jpg";

class Team extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Row>
          <Col sm={{ span: 20, offset: 4 }} md={{ span: 7, offset: 4 }}>
            <div className="image-container-yellow">
              <img src="https://i.imgur.com/N0tXQ48.jpg" />
            </div>
          </Col>
          <Col sm={{ span: 20, offset: 4 }} md={{ span: 8, offset: 1 }}>
            <br />
            <br />
            <br />
            <br />
            <div className="image-container-yellow">
              <div className="image-content-yellow">
                <h2>who we are</h2>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Team;
