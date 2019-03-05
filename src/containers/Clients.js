import React from "react";
import { Row, Col } from "antd";
import blue_fuzz from "../assets/images/blue_fuz.png";
var contentful = require("contentful");

function sortProperties(obj) {
  // convert object into array
  var sortable = [];
  for (var key in obj)
    if (obj.hasOwnProperty(key)) sortable.push([key, obj[key]]); // each item is an array in format [key, value]

  // sort items by value
  sortable.sort(function(a, b) {
    var x = a[1]["order"],
      y = b[1]["order"];
    return x < y ? -1 : x > y ? 1 : 0;
  });
  var newList = {};
  var arrayLength = sortable.length;
  for (var i = 0; i < arrayLength; i++) {
    newList[sortable[i][0]] = sortable[i][1];
  }
  return newList; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}

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
      .getEntries({ content_type: "client", order: "fields.clientName" })
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
            cleanedEntries[singleClientObject.fields.clientType.fields.name] = {
              array: [],
              order: singleClientObject.fields.clientType.fields.order
            };
            that.setState({ cleanedEntries: cleanedEntries });
          }
        }
        var sortedEntries = sortProperties(that.state.cleanedEntries);
        that.setState({ cleanedEntries: sortedEntries });

        console.log(sortedEntries);
        var arrayLength = entries.items.length;
        for (var i = 0; i < arrayLength; i++) {
          var singleClientObject = entries.items[i];
          if (
            singleClientObject.fields.clientType.fields.name in
            that.state.cleanedEntries
          ) {
            that.state.cleanedEntries[
              singleClientObject.fields.clientType.fields.name
            ]["array"].push(singleClientObject);
          }
        }
      });
  }
  componentDidMount() {
    this.findItems();
    var that = this;
    function stateChange(that) {
      setTimeout(function() {
        that.setState({ readyToRender: true });
      }, 1000);
    }
    stateChange(that);
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
          <Col
            lg={{ span: 6 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            key={Math.random()}
          >
            <a
              href={entry.fields.clientUrl}
              target="_blank"
              className="client-link"
            >
              <div className="client-object">
                {entry.fields.clientImage.fields ? (
                  <img
                    className="client-image"
                    src={
                      entry.fields.clientImage.fields.file.url +
                      "?w=400&h=400&fit=fill"
                    }
                  />
                ) : null}
                <br />
                <div className="border-container">
                  <h3>{entry.fields.clientName}</h3>
                  <div className="border" />
                </div>
              </div>
            </a>
          </Col>
        );
        singleClientRow.push(clientObject);
      }
      if (count == 5 || count == 6 || count == 7 || count == 8) {
        var clientObject = (
          <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }}>
            <a
              href={entry.fields.clientUrl}
              target="_blank"
              className="client-link"
            >
              <div className="client-object">
                {entry.fields.clientImage.fields ? (
                  <img
                    className="client-image"
                    src={
                      entry.fields.clientImage.fields.file.url +
                      "?w=400&h=400&fit=fill"
                    }
                  />
                ) : null}
                <br />
                <div className="border-container">
                  <h3>
                    {entry.fields.clientName} <div className="border" />
                  </h3>
                </div>
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
  renderClientObjects(cleanedEntries) {
    if (cleanedEntries) {
      var titles = [];
      for (var category in this.state.cleanedEntries) {
        if (typeof this.state.cleanedEntries[category] !== "function") {
          titles.push(
            <Row>
              <h2 id={category}>{category}</h2>
              <br />
              <Row>
                {this.renderCategoryObjects(
                  this.state.cleanedEntries[category]["array"]
                )}
              </Row>
              <br />
            </Row>
          );
        }
      }
    }

    return titles;
  }
  scrollTo(id) {}
  render() {
    return (
      <div className="style-wrapper" style={{ marginTop: "20px" }}>
        <div className="home-wrapper company-listings tight-container">
          <br />
          <br />
          {this.renderClientObjects(this.state.cleanedEntries)}
        </div>
      </div>
    );
  }
}

export default Clients;
