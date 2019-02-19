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
      entries: null,
      cleanedEntries: []
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
        content_type: "pressObject",
        limit: 500
      })
      .then(function(entries) {
        that.setState({
          entries: entries.items
        });
        var arrayLength = entries.items.length;
        var cleanedEntries = {};
        for (var i = 0; i < arrayLength; i++) {
          var singleClientObject = entries.items[i];
          if (
            !(
              singleClientObject.fields.pressClient.fields.clientName in
              that.state.cleanedEntries
            )
          ) {
            cleanedEntries[
              singleClientObject.fields.pressClient.fields.clientName
            ] = {
              array: [],
              order: singleClientObject.fields.pressClient.fields.order
            };
            that.setState({
              cleanedEntries: cleanedEntries
            });
          }
        }
        var sortedEntries = sortProperties(that.state.cleanedEntries);
        that.setState({
          cleanedEntries: sortedEntries
        });

        var arrayLength = entries.items.length;
        for (var i = 0; i < arrayLength; i++) {
          var singleClientObject = entries.items[i];
          if (
            singleClientObject.fields.pressClient.fields.clientName in
            that.state.cleanedEntries
          ) {
            that.state.cleanedEntries[
              singleClientObject.fields.pressClient.fields.clientName
            ]["array"].push(singleClientObject);
          }
        }
      });
  }
  componentDidMount() {
    this.setState({ client: this.props.match.params.clientName });
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

  renderPressObjects(entries) {
    if (entries) {
      return entries.map(entry => {
        var singlePressObject = (
          <div key={Math.random()} className="client-press-peice">
            <a
              href={entry.fields.pressUrl}
              target="_blank"
              className="client-link"
            >
              <div className="client-object">
                {entry.fields.pressSource.fields.pressCompanyIcon ? (
                  <img
                    className="press-logo"
                    src={
                      entry.fields.pressSource.fields.pressCompanyIcon.fields
                        .file.url + "?w=350&h=200&fit=pad"
                    }
                  />
                ) : null}
                <br />
                <img
                  className="client-image"
                  src={
                    entry.fields.pressImage.fields.file.url +
                    "?w=400&h=600&fit=fill"
                  }
                />
                <br />
                <h3 className="press-title"> {entry.fields.title}</h3>
              </div>
            </a>
          </div>
        );
        return singlePressObject;
      });
    }
  }

  renderPressCategorytObjects(cleanedEntries) {
    if (cleanedEntries) {
      var titles = [];
      console.log("----------");
      for (var category in this.state.cleanedEntries) {
        if (typeof this.state.cleanedEntries[category] !== "function") {
          console.log(category);
          console.log(this.state.cleanedEntries[category]["array"]);
          if (slugify(category) === this.state.client) {
            titles.push(
              <div>
                <h2> {category} </h2>
                <Link
                  to={"/press/"}
                  style={{
                    textAlign: "center",
                    display: "block"
                  }}
                >
                  {" "}
                  See All Posts
                </Link>{" "}
                <br />
                <div className="client-press-container-thing">
                  {" "}
                  {this.renderPressObjects(
                    this.state.cleanedEntries[category]["array"]
                  )}{" "}
                </div>{" "}
                <br />
              </div>
            );
          }
        }
      }
    }

    return titles;
  }

  render() {
    return (
      <div className="home-wrapper company-listings client-only">
        {" "}
        {this.renderPressCategorytObjects(this.state.cleanedEntries)}{" "}
      </div>
    );
  }
}

export default Clients;
