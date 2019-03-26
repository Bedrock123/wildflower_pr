import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

var contentful = require("contentful");
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: null,
      press: null
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
        content_type: "ordering",
        limit: 1,
        include: 5
      })
      .then(function(entries) {
        console.log(entries);
        that.setState({ entries: entries });
      });
  }

  findPress() {
    var that = this;
    this.client
      .getEntries({
        content_type: "pressObject",
        limit: 350,
        include: 3
      })
      .then(function(entries) {
        console.log(entries);
        that.setState({ press: entries });
      });
  }

  componentDidMount() {
    this.findItems();
    this.findPress();
  }
  renderPressObject(pressID) {
    if (this.state.press) {
      return this.state.press.items.map(function(pressObject) {
        if (pressObject.sys.id === pressID) {
          return (
            <Col
              lg={{
                span: 6
              }}
              md={{
                span: 12
              }}
              sm={{
                span: 24
              }}
              key={Math.random()}
            >
              <a
                href={pressObject.fields.pressUrl}
                target="_blank"
                className="client-link"
              >
                <div className="client-object">
                  {pressObject.fields.pressSource ? (
                    <div>
                      {pressObject.fields.pressSource.fields
                        .pressCompanyIcon && (
                        <img
                          className="press-logo"
                          src={
                            pressObject.fields.pressSource.fields
                              .pressCompanyIcon.fields.file.url +
                            "?w=350&h=200&fit=pad&fm=jpg"
                          }
                        />
                      )}
                    </div>
                  ) : (
                    <div style={{ height: "32px" }}>
                      <br />
                      <br />
                    </div>
                  )}
                  <br />
                  <div className="press-image-container">
                    {pressObject.fields.pressImage && (
                      <img
                        className="client-image"
                        src={
                          pressObject.fields.pressImage.fields.file.url +
                          "?w=400&h=400&fit=fill"
                        }
                      />
                    )}
                    <h3 className="press-title"> {pressObject.fields.title}</h3>
                    <div className="press-image-overlay" />
                  </div>
                  <br />
                </div>
              </a>
            </Col>
          );
        } else {
          return null;
        }
      });
    } else {
      return null;
    }
  }
  renderPress(sysID) {
    var that = this;
    return this.state.entries.includes.Entry.map(function(pressEntry) {
      if (
        pressEntry.fields.pressClient &&
        pressEntry.fields.pressClient.sys.id === sysID
      ) {
        return that.renderPressObject(pressEntry.sys.id);
      } else {
        return null;
      }
    });
  }
  renderPressObjects(entries) {
    if (!entries) {
      return null;
    }
    var that = this;
    return entries.items[0].fields.pressOrdering.map(function(pressObject) {
      return (
        <Row className="tight-container" key={pressObject.fields.clientName}>
          <h2> {pressObject.fields.clientName} </h2>
          <Link
            to={"/press/" + slugify(pressObject.fields.clientName)}
            className="see-all-posts"
            style={{
              textAlign: "center",
              display: "block"
            }}
          >
            See All Posts
          </Link>
          <br />
          <Row>{that.renderPress(pressObject.sys.id)}</Row>
          <br />
        </Row>
      );
    });
  }

  render() {
    return (
      <div className="home-wrapper company-listings tight-container">
        <br />
        <br />
        <br />
        {this.renderPressObjects(this.state.entries)}
      </div>
    );
  }
}

export default Clients;
