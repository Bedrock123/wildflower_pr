import React from "react";
import { Row, Col } from "antd";

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
      entries: null
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
        content_type: "pressObject"
      })
      .then(function(entries) {
        that.setState({
          entries: entries.items
        });
      });
  }
  componentDidMount() {
    this.findItems();
    var that = this;

    function stateChange(that) {
      setTimeout(function() {
        that.setState({
          readyToRender: true
        });
      }, 1000);
    }
    stateChange(that);
  }
  renderPressObjects() {
    if (this.state.entries) {
      return this.state.entries.map(entry => {
        return (
          <Col
            lg={{ span: 6 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            key={Math.random()}
          >
            <a
              href={entry.fields.pressUrl}
              target="_blank"
              className="client-link"
            >
              <div className="client-object">
                <img
                  className="client-image"
                  src={
                    entry.fields.pressImage.fields.file.url +
                    "?w=400&h=400&fit=fill"
                  }
                />
                <br />
                <img
                  className="press-logo"
                  src={
                    entry.fields.pressSource.fields.pressCompanyIcon.fields.file
                      .url + "?w=400&h=200&fit=pad"
                  }
                />
              </div>
            </a>
          </Col>
        );
      });
    }
  }
  render() {
    return (
      <div className="home-wrapper company-listings">
        <Row>
          <h2> animus </h2>
          <Row>{this.renderPressObjects()}</Row>
          <br />
        </Row>
      </div>
    );
  }
}

export default Clients;
