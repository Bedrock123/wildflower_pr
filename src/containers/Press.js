import React from "react";
import { Row, Col } from "antd";
import couch_photo from "../assets/images/couch.jpg";

class Press extends React.Component {
  render() {
    return (
      <div className="home-wrapper company-listings">
      <Row>
      <h2>cleancult</h2>
      <br />
       <Col lg={{ span: 6 }}>
          <a href="#" target="_blank">
            <div className="press-object">
                <div className="internal-press-container" />
            </div>
          </a>
        </Col>
      <br />
      </Row>
      </div>
    );
  }
}

export default Press;
