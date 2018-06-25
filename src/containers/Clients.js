import React from "react";
import { Row, Col } from "antd";
import couch_photo from "../assets/images/couch.jpg";

var contentful = require("contentful");

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
  }
  client = contentful.createClient({
    space: "m7b48oankuyj",
    accessToken:
      "e6a73de0cbe113450d3bb4b02e54a0db2552cd57c390f8d1cb53e278c9075c8d"
  });

  componentWillMount() {
    var that = this;
    this.client
      .getEntries({
        content_type: "client"
      })
      .then(function(entries) {
        that.setState({ entries: entries.items });
      });
  }
  renderClientObjects() {
    return this.state.entries.map(entry => {
      return (
        <Col lg={{ span: 6 }}>
          <a href={entry.fields.clientUrl} target="_blank">
            <div className="client-object">
              <img
                src={
                  entry.fields.clientImage.fields.file.url +
                  "?w=400&h=400&fit=fill"
                }
              />
              <br />
              <h3>{entry.fields.clientName}</h3>
            </div>
          </a>
        </Col>
      );
    });
  }
  render() {
    return (
      <div className="home-wrapper company-listings">
        <Row>
          <h2>Wellness & Ecofriendly Companies</h2>
          <br />
          {this.renderClientObjects()}
        </Row>
      </div>
    );
  }
}

export default Clients;
