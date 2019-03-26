import React from "react";
import { Row, Col } from "antd";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

class CallOut extends React.Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-wrapper-inner">
          <h3>don't be shy, come bloom among the wild.</h3>
          <h4>
            <a href="mailto:hi@wildflowerpr.co">hi@wildflowerpr.co</a>
          </h4>
          <div className="sign-up-wrapper">
            <p>sign up for our newsletter</p>
            <form
              action="https://formspree.io/hi@wildflowerpr.co"
              method="POST"
            >
              <input
                label="email"
                type="email"
                placeholder=""
                className="wf-input"
              />
            </form>
          </div>
          <div className="footer-footer-wrapper">
            <div className="icon-wrapper">
              <a
                href="https://www.instagram.com/wildflowerpr.co/"
                className="icon"
                target="_blank"
                style={{ paddingLeft: "8px", paddingRight: "8px" }}
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://www.facebook.com/wildflowerpr.co"
                className="icon"
                target="_blank"
                style={{ paddingLeft: "11px", paddingRight: "11px" }}
              >
                <i className="fab fa-facebook-f" />
              </a>

              <a
                href="https://www.linkedin.com/company/wildflowerpr"
                className="icon"
                target="_blank"
                style={{ paddingLeft: "8px", paddingRight: "8px" }}
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <p>2019. all rights reserved wildflowerpr.co</p>
            <p>
              designed by{" "}
              <a href="http://wholebunchofbricks.tumblr.com/" target="_blank">
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
