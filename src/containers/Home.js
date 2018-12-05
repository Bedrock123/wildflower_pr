import React from "react";
import { Row, Col } from "antd";
import logo from "../assets/images/logo.png";

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Row>
          <Col md={{ span: 12, offset: 6 }} sm={{ span: 20, offset: 2 }}>
            <img src={logo} alt="Wild Flower" className="center-logo" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
