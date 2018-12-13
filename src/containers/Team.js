import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import catherine from "../assets/images/catherine.png";
import icon_1 from "../assets/images/icon-1.png";
import icon_2 from "../assets/images/icon-2.png";
import icon_3 from "../assets/images/icon-3.png";

class Home extends React.Component {
  render() {
    return (
      <Link className="style-wrapper" to="/about-the-team">
        <div className="style-container">
          <Row>
            <Col
              lg={{
                span: 12
              }}
              md={{
                span: 24
              }}
              sm={{
                span: 24
              }}
            >
              <div className="content-container">
                <div className="content-header">
                  <p>THE TEAM</p>
                </div>
                <div className="content-block">
                  <img src={catherine} alt="Catherine" />
                  <p className="content-title">THE JOURNEY</p>
                  <p className="content-paragraph">
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna. Nulla vitae elit libero, a pharetra augue. Aenean eu
                    leo quam. Pellentesque ornare sem lacinia quam venenatis
                    vestibulum. Cras mattis consectetur purus sit amet
                    fermentum.
                    <br />
                    <br />
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                    Aenean lacinia bibendum nulla sed consectetur. Vivamus
                    sagittis lacus vel augue laoreet rutrum faucibus dolor
                    auctor. Maecenas faucibus mollis interdum. Integer posuere
                    erat a ante venenatis dapibus posuere velit aliquet.
                    <br />
                    <br />
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                    Aenean lacinia bibendum nulla sed consectetur. Vivamus
                    sagittis lacus vel augue laoreet rutrum faucibus dolor
                    auctor. Maecenas faucibus mollis interdum. Integer posuere
                    erat a ante venenatis dapibus posuere velit aliquet.
                  </p>
                </div>
                <div className="content-block">
                  <p className="content-title">THE CREDENTIALS</p>
                  <p className="content-paragraph">
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna. Nulla vitae elit libero, a pharetra augue. Aenean eu
                    leo quam. Pellentesque ornare sem lacinia quam venenatis
                    vestibulum. Cras mattis consectetur purus sit amet
                    fermentum.
                    <br />
                    <br />
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                    Aenean lacinia bibendum nulla sed consectetur. Vivamus
                    sagittis lacus vel augue laoreet rutrum faucibus dolor
                    auctor. Maecenas faucibus mollis interdum. Integer posuere
                    erat a ante venenatis dapibus posuere velit aliquet.
                  </p>
                </div>
              </div>
            </Col>

            <Col
              lg={{
                span: 12
              }}
              md={{
                span: 24
              }}
              sm={{
                span: 24
              }}
            >
              <div className="content-container icon-container-thing">
                <div className="content-header">
                  <p>THE COLLABORATORS</p>
                </div>
                <div className="content-block">
                  <img src={icon_1} alt="Icon" className="content-small-icon" />
                  <p className="content-title">CONTENT CREATION</p>
                  <p className="content-paragraph">
                    carissa ann santos
                    <br />
                    stephanie cowan
                    <br />
                    veronica cintron
                    <br />
                  </p>
                </div>
                <div className="content-block">
                  <img src={icon_2} alt="Icon" className="content-small-icon" />
                  <p className="content-title">DESIGN</p>
                  <p className="content-paragraph">
                    andreas de camps
                    <br />
                    claudia gerena
                    <br />
                  </p>
                </div>
                <div className="content-block">
                  <img src={icon_3} alt="Icon" className="content-small-icon" />
                  <p className="content-title">PUBLICISTS</p>
                  <p className="content-paragraph">
                    rocia guzman
                    <br />
                    georeen tanner
                    <br />
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    );
  }
}

export default Home;
