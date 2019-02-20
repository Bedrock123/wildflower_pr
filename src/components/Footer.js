import React from "react";
import { Row, Col } from "antd";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

class CallOut extends React.Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-wrapper-inner">
          <h3>don't be shy - come bloom among the wild!</h3>
          <h4>
            <a href="mailto:hello@wildflower.com">hello@wildflower.com</a>
          </h4>
          <div className="sign-up-wrapper">
            <p>sign up for our newsletter</p>
            <input
              label="email"
              type="email"
              placeholder=""
              className="wf-input"
            />
          </div>
          <div className="footer-footer-wrapper">
            <p>© 2019. All Rights Reserved Wildflower.com</p>
            <p>Designed by a wholebunchofbricks / Developed Zach Bedrosian</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CallOut;
