import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import PressCard from "../components/PressCard";
import pressClients from "../data/press";

class Press extends React.Component {
  renderPressClient(pressClient) {
    var featured = pressClient.articles.filter((article) => article.featured);

    return (
      <Row className="tight-container" key={pressClient.slug}>
        <h2> {pressClient.name} </h2>
        <Link
          to={"/press/" + pressClient.slug}
          className="see-all-posts"
          style={{
            textAlign: "center",
            display: "block",
          }}
        >
          See All Posts
          <div className="border" />
        </Link>
        <br />
        <Row>
          {featured.map((article, idx) => (
            <Col
              lg={{ span: 6 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              key={article.url + idx}
            >
              <PressCard article={article} />
            </Col>
          ))}
        </Row>
        <br />
      </Row>
    );
  }

  render() {
    return (
      <div className="home-wrapper company-listings tight-container">
        <br />
        <br />
        <br />
        {pressClients
          .filter((pressClient) => pressClient.showOnPressPage)
          .map((pressClient) => this.renderPressClient(pressClient))}
      </div>
    );
  }
}

export default Press;
