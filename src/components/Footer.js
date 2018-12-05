import React from "react";
import { Row, Col } from "antd";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

class CallOut extends React.Component {
  render() {
    return (
      <div className="footer-wrapper">
        <Row style={{ height: "100%" }}>
          <Col
            md={24}
            lg={{ span: 6, offset: 1 }}
            style={{ height: "100%" }}
            className="mobile-hidden"
          >
            <div className="footer-block">
              <p>Want to join our team!?</p>
              <br />
              <Link className="button" to="/join-our-team">
                join our team
              </Link>
            </div>
          </Col>
          <Col md={24} lg={10} style={{ height: "100%" }}>
            <div className="footer-block">
              <br />
              <p>nyc | brooklyn | 212.xxx.xxx</p>
              <p>contact us at catherine@insidecrowd.co</p>
              <Row>
                <Col className="social-icons">
                  <a href="#" target="_blank">
                    <i class="fab fa-instagram" />
                  </a>

                  <a href="#" target="_blank">
                    <i class="far fa-envelope" />
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            md={24}
            lg={6}
            style={{ height: "100%" }}
            className="mobile-hidden"
          >
            <div className="footer-block">
              <p>Sign up for our newsletter</p>
              <input
                label="email"
                type="email"
                placeholder="you@amazing.com"
                className="wf-input"
              />
              <br />
              <a className="button" href="#" style={{ float: "left" }}>
                submit
              </a>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CallOut;
