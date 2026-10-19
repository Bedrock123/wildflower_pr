import React from "react";
import { Row, Col } from "antd";
import clientCategories from "../data/clients";

class Clients extends React.Component {
  renderClientCard(client) {
    var cardInner = (
      <div className="client-object">
        {client.image ? (
          <img className="client-image" src={client.image} alt={client.name} />
        ) : null}
        <br />
        <div className="border-container">
          <h3>{client.name}</h3>
          <div className="border" />
        </div>
      </div>
    );

    return (
      <Col
        lg={{ span: 6 }}
        md={{ span: 12 }}
        sm={{ span: 24 }}
        key={client.name}
      >
        {client.url ? (
          <a
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="client-link"
          >
            {cardInner}
          </a>
        ) : (
          <div className="client-link" style={{ cursor: "default" }}>
            {cardInner}
          </div>
        )}
      </Col>
    );
  }

  renderCategory(category) {
    // Four cards per row, matching the lg column span.
    var rows = [];
    for (var i = 0; i < category.clients.length; i += 4) {
      rows.push(
        <Row key={i}>
          {category.clients
            .slice(i, i + 4)
            .map((client) => this.renderClientCard(client))}
        </Row>
      );
    }

    return (
      <Row key={category.name}>
        <h2 id={category.name}>{category.name}</h2>
        <br />
        <Row>
          <div>{rows}</div>
        </Row>
        <br />
      </Row>
    );
  }

  render() {
    return (
      <div className="style-wrapper" style={{ marginTop: "20px" }}>
        <div className="home-wrapper company-listings tight-container">
          <br />
          <br />
          {clientCategories.map((category) => this.renderCategory(category))}
        </div>
      </div>
    );
  }
}

export default Clients;
