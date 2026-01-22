import React from "react";
import { Row, Col } from "antd";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

class CallOut extends React.Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-wrapper-inner">
          <div className="footer-footer-wrapper">
            <h4 style={{ paddingBottom: "10px", color: "blue !important" }}>
              <a
                href="mailto:hi@wildflowerpr.co"
                className="email"
                style={{ paddingBottom: "10px", color: "blue !important" }}
              >
                hi@wildflowerpr.co
              </a>
            </h4>
            <div className="icon-wrapper">
              <a
                href="https://www.instagram.com/wLDFLWRPR/"
                className="icon"
                target="_blank"
                style={{ paddingLeft: "8px", paddingRight: "8px" }}
              >
                <i className="fab fa-instagram" />
              </a>

              <a
                href="https://www.linkedin.com/in/catherinecuello/"
                className="icon"
                target="_blank"
                style={{ paddingLeft: "8px", paddingRight: "8px" }}
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <p>founded by catherine cuello-fuente</p>
            <p>2026. all rights reserved wildflowerpr.co</p>

            <p>
              designed by{" "}
              <a href="http://andreasdecamps.com/ " target="_blank">
                andreas de camps german
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CallOut;
