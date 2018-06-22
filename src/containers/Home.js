import React from "react";
import { Row, Col } from "antd";
import couch_photo from "../assets/images/couch.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Row>
          <Col span={16} offset={4}>
            <img
              src={couch_photo}
              alt="Couch On A Beach"
              className="home-main-image"
            />
          </Col>{" "}
          <Col span={12} offset={6}>
            <h1 className="main-text-block">
              becca is a creative marketing agency with offices in new york +
              chicago + la.we understand the power of elegant pr— that which is
              largely invisible.{" "}
            </h1>{" "}
          </Col>{" "}
        </Row>{" "}
      </div>
    );
  }
}

export default Home;
