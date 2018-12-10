import React from "react";
import { Row, Col } from "antd";
import logo from "../assets/images/logo.gif";

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Row>
          <Col
            md={{ span: 18, offset: 3 }}
            sm={{ span: 20, offset: 2 }}
            style={{ textAlign: "center" }}
          >
            <img src={logo} alt="Wild Flower" className="center-logo" />
            <p className="home-pagep-title">Public Relations</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
