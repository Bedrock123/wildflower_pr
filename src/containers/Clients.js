import React from "react";
import { Row, Col } from "antd";
import couch_photo from "../assets/images/couch.jpg";

var contentful = require("contentful");

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      cleanedEntries: {}
    };
  }
  client = contentful.createClient({
    space: "m7b48oankuyj",
    accessToken:
      "e6a73de0cbe113450d3bb4b02e54a0db2552cd57c390f8d1cb53e278c9075c8d"
  });

  findItems() {
    var that = this;
    this.client
      .getEntries({
        content_type: "client"
      })
      .then(function(entries) {
        that.setState({ entries: entries.items });
        var arrayLength = entries.items.length;
        var cleanedEntries = {};
        for (var i = 0; i < arrayLength; i++) {
          var singleClientObject = entries.items[i];
          if (
            !(
              singleClientObject.fields.clientType.fields.name in
              that.state.cleanedEntries
            )
          ) {
            cleanedEntries[
              singleClientObject.fields.clientType.fields.name
            ] = [];
            that.setState({ cleanedEntries: cleanedEntries });
          }
        }
        console.log(that.state.cleanedEntries);
        var arrayLength = entries.items.length;
        for (var i = 0; i < arrayLength; i++) {
          var singleClientObject = entries.items[i];
          if (
            singleClientObject.fields.clientType.fields.name in
            that.state.cleanedEntries
          ) {
            that.state.cleanedEntries[
              singleClientObject.fields.clientType.fields.name
            ].push(singleClientObject);
          }
        }
      });
  }
  componentDidMount() {
    this.findItems();
  }

  renderCategoryObjects(entries) {
    var count = 0;
    var allCategoryClients = [];
    var singleClientRow = [];
    var secondClientRow = [];

    entries.map(entry => {
      count = count + 1;
      if (count == 1 || count == 2 || count == 3 || count == 4) {
        var clientObject = (
          <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }}>
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
        singleClientRow.push(clientObject);
      }
      if (count == 5 || count == 6 || count == 7 || count == 8) {
        var clientObject = (
          <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }}>
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
        secondClientRow.push(clientObject);
      }
    });
    allCategoryClients.push(<Row>{singleClientRow}</Row>);
    allCategoryClients.push(<Row>{secondClientRow}</Row>);
    return allCategoryClients;
  }
  renderClientObjects() {
    var titles = [];
    for (var category in this.state.cleanedEntries) {
      if (typeof this.state.cleanedEntries[category] !== "function") {
        titles.push(
          <Row>
            <h2>{category}</h2>
            <br />
            <Row>
              {this.renderCategoryObjects(this.state.cleanedEntries[category])}
            </Row>
            <br />
          </Row>
        );
      }
    }

    return titles;
  }
  render() {
    return (
      <div className="home-wrapper company-listings">
        {this.renderClientObjects()}
      </div>
    );
  }
}

export default Clients;
