import React from "react";
import { Row, Col } from "antd";
import couch_photo from "../assets/images/couch.jpg";

class Press extends React.Component {
  renderPressObjects() {
    var pressObjects = [1, 1, 1, 1, 1, 1, 1, 1];
    return pressObjects.map(pressObject => {
      return (
        <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }}>
          <a href="#" target="_blank">
            <div className="press-object">
              <img
                src="https://i.imgur.com/J68BKbA.png"
                className="press-logo"
              />
              <img
                src="https://i.imgur.com/aCRCkf6.png"
                className="press-photo"
              />
            </div>
          </a>
          <br />
          <br />
        </Col>
      );
    });
  }
  render() {
    return (
      <div className="home-wrapper company-listings">
        <Row
          style={{
            maxWidth: "1236px",
            margin: "auto"
          }}
        >
          <h2>cleancult</h2>
          <br />
          {this.renderPressObjects()}
          <br />
        </Row>
      </div>
    );
  }
}

export default Press;
