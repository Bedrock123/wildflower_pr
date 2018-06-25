import React from "react";
import { Row, Col } from "antd";
import couch_photo from "../assets/images/couch.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Row>
          <Col sm={{ span: 20, offset: 4 }} md={{ span: 6, offset: 5 }}>
            <div className="image-container-green">
              <img src="https://i.imgur.com/iCfVHNK.jpg" />
            </div>
          </Col>
          <Col sm={{ span: 20, offset: 4 }} md={{ span: 6, offset: 1 }}>
            <div className="image-container-green">
              <div className="image-content-green">
                <h2>creative</h2>
                <b>design</b>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum.
                </p>
                <br />
                <b>social media</b>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum.
                </p>
                <br />
                <b>website development</b>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col sm={{ span: 20, offset: 4 }} md={{ span: 6, offset: 5 }}>
            <div>
              <div className="image-content-red">
                <h2>public relations</h2>
                <b>communications</b>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum.
                </p>
                <br />
                <b>strategic partnerships</b>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum.
                </p>
                <br />
                <b>media relations</b>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={{ span: 20, offset: 4 }} md={{ span: 6, offset: 1 }}>
            <div className="image-container-red">
              <img src="https://i.imgur.com/iCfVHNK.jpg" />
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col sm={{ span: 20, offset: 4 }} md={{ span: 6, offset: 5 }}>
            <div className="image-container-yellow">
              <img src="https://i.imgur.com/iCfVHNK.jpg" />
            </div>
          </Col>
          <Col sm={{ span: 20, offset: 4 }} md={{ span: 6, offset: 1 }}>
            <div className="image-container-yellow">
              <div className="image-content-yellow">
                <h2>marketing</h2>
                <b>brand development</b>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum.
                </p>
                <br />
                <b>events</b>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum.
                </p>
                <br />
                <b>strategy</b>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
